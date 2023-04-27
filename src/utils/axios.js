import { message } from 'antd';
import axios from "axios";
import Loading from "@/components/loding";
import URL from './url';
import {createHashHistory} from 'history';
const history = createHashHistory();
axios.defaults.headers['Accept'] = 'application/json';
var requestCount = 0; // 请求次数
let config = {
  baseURL: URL,
  timeout: 10 * 6000, // Timeout
  withCredentials: false,
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    if(requestCount === 0){
      // Loading.show();
    }
    requestCount++;
    config.headers.common['token'] = sessionStorage.getItem('token');
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function(response) {
    requestCount--;
    if(requestCount === 0){
      Loading.hide();
    }
    // 登录失效
    if(response.data.code === 401){
      history.replace('/login');
    }else{
      return response.data;
    }
  },
  error => {
    requestCount--;
    if(requestCount === 0){
      Loading.hide();
      message.error('服务器异常');
    }
    return Promise.reject(error);
  }
);

const _http = {
  post:(url,params,success,err)=>{
    _axios.post(url,params).then(res=>{
      if(!res){
        return;
      }
      if(res.code === 0){
        if (typeof success === 'function') {
          success(res);
        }
      }else {
        message.error(res.msg);
        if (typeof err === 'function') {
          err(res);
        }
      }
    })
  },
  get: (url, params, success, err)=> {
    _axios.get(url, { params: params}).then(res => {
      if(!res){
        return;
      }
      if (res.code === 0) {
        if (typeof success === 'function') {
          success(res);
        }
      } else {
        message.error(res.msg)
        if (typeof err === 'function') {
          err(res);
        }
      }
    })
  },
	delete: (url, params, success, err)=>{
		_axios.delete(url, { params: params}).then(res => {
			if(!res){
				return;
			}
			if (res.code === 0) {
				if (typeof success === 'function') {
				  success(res);
				}
			} else {
				message.error(res.msg)
				if (typeof err === 'function') {
				  err(res);
				}
			}
		})
	},
  upload: (formData,success)=>{
    _axios.post('oss/upload/uploadImg',formData).then(res=>{
      if(!res){
        return;
      }
      if(res.code === 0){
        if (typeof success === 'function') {
          res.url = URL+'oss/upload/getImg'+res.fileName;
          success(res);
        }
      }else{
        message.error(res.msg);
      }
    })
  },
  download: (url)=>{
    let link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.setAttribute('download', new Date().getTime());
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
}
export default _http;
