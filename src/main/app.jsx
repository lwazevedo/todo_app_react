import '../commons/template/dependencias'
import React from 'react'


import Menu from '../commons/template/menu'
import SideBar from '../commons/template/sidebar'
import Footer from '../commons/template/footer'
import Messages from '../commons/msg/messages'

export default props => (
    <div className='wrapper'>
        <Menu/>
        <SideBar/>
        <div className="content-wrapper">
            {props.children}
        </div>
        <Footer/>
        <Messages />
    </div>
)