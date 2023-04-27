import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import  "react-app-polyfill/ie9";
import  "react-app-polyfill/stable";
//全局配置
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import axios from '@/utils/axios';
import message from '@/utils/message';
import enums from '@/utils/enum';
import 'moment/locale/zh-cn';
import '@/index.less';
import '@/assets/font/iconfont.css';
import App from '@/App';
import {mainRoutes} from '@/router';
import pack from '../package.json';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_2467728_g8z238i3p0t.js'
    ],
});

moment.locale('zh-cn');
React.axios = axios;
React.message = message;
React.enums = enums;
React.Version = pack.Version;
React.IconFont = IconFont;

ReactDOM.render(
  <ConfigProvider locale={zh_CN} componentSize="middle">
    <Router>
      <Suspense fallback={<> </>}>
        <Switch>
          <Route path={'/'+React.Version} render={routeProps=><App {...routeProps} />}/>
          {mainRoutes.map((router)=> <Route key={router.path} {...router}/>)}
          <Redirect to={'/'+React.Version} />
        </Switch>
      </Suspense>
    </Router>
  </ConfigProvider>,
  document.getElementById('root')
);