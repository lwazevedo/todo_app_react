import '../commons/template/dependencias'
import React from 'react'
import Routes from './routes'

import Menu from '../commons/template/menu'
import SideBar from '../commons/template/sidebar'
import Footer from '../commons/template/footer'

export default props => (
    <div className='wrapper'>
        <Menu/>
        <SideBar/>
        <div className="content-wrapper">
            <Routes/>
        </div>
        <Footer/>
    </div>
)