import React, {Component } from 'react';
import {Switch, Route, Redirect } from "react-router-dom";
import {adminRoutes} from '@/router';
import Layout from '@/components/layout';
class App extends Component{
  render(){
    return (
      <Layout>
        <Switch>
          {adminRoutes.map((router)=> <Route key={router.path} {...router} render={routeProps=><router.component {...routeProps} />}/>)}
          <Redirect to="/404" />
        </Switch>
      </Layout>
    );
  }
}
export default App;