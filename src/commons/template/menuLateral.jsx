import React from 'react'
import MenuLateralItem from './menuLateralItem'
import MenuTree from './menuLateralTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuLateralItem path='#' label='Dashboard' icon='dashboard'/>
        <MenuTree label='React' icon='th-large'>
            <MenuLateralItem path='#dashboard-react' label='Posts' icon='list-ul'/>
            <MenuLateralItem
                path='#create-post-react'
                label='Criar Post'
                icon='circle-o-notch'/>
        </MenuTree>
        <MenuTree label='React-Redux' icon='th-large'>
            <MenuLateralItem path='#dashboard-reduce' label='Posts' icon='list-ul'/>
        </MenuTree>
    </ul>
)