import React from 'react'
import MenuLateralItem from './menuLateralItem'
import MenuTree from './menuLateralTree'
export default props => (
    <ul className='sidebar-menu'>
        <MenuLateralItem path='#' label='Dashboard' icon='dashboard'/>
        <MenuTree label='Posts' icon='edit'>
            <MenuLateralItem path='#todos' label='Todos Posts' icon='usd' />
        </MenuTree>    
    </ul>
)