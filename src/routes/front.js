/**
 * @desc 项目路由设置
 * @author Jafeney <692270687@qq.com>
 **/

import React from 'react'
import { Route } from 'react-router'
import Door from '../containers/front/door'

// import Home from '../containers/front/home'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

const routes = (
    <Route>
        <Route path="/" component={Door} />
        {/*<Route path="/home" component={Home} />*/}
    </Route>
);

export default routes