/**
 * @desc 项目路由设置
 * @author Jafeney <692270687@qq.com>
 **/

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Door from '../containers/front/door'
import Menu from '../royal/menu/menu'
import Home from '../containers/front/home'
import Profile from '../containers/front/profile'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

const routes = (
    <div>
        <p>123456</p>
        <Menu></Menu>
        <Route path="/" component={Door} />
        <Route path="home" component={Home} />
        <Route path="profile" component={Profile} />
    </div>
);

export default routes