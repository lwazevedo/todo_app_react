import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import About from '../about/about'
import DashboardReact from '../dashboardReact/dashboardReact'
import CreatePostReact from '../createPostReact/createPostReact'

export default props => (
    <Router history={hashHistory}>
        <Route path='/dashboard-react' component={DashboardReact}/>
        <Route path='/create-post-react' component={CreatePostReact}/>
        <Route path='/' component={DashboardReact}/>
        <Redirect from='*' to='/' />
    </Router>
)