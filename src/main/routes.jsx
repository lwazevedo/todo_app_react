import React from 'react'
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'
import App from './app'
import About from '../about/about'
import DashboardReact from '../dashboardReact/dashboardReact'
import CreatePostReact from '../createPostReact/createPostReact'
import DashboardReduce from '../dashboardReduce/dashboardReduce'
import CreatePostReduce from '../createPostReduce/createPostReduce'
export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={DashboardReact} />
            <Route path='dashboard-react' component={DashboardReact}/>
            <Route path='create-post-react' component={CreatePostReact}/>
            <Route path='dashboard-reduce' component={DashboardReduce}/>
            <Route path='create-post-reduce' component={CreatePostReduce}/>
        </Route>
        
        <Redirect from='*' to='/'/>
    </Router>
)