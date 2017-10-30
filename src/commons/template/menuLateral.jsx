import React from 'react'
import MenuLateralItem from './menuLateralItem'
import MenuTree from './menuLateralTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuTree label='React' icon='external-link'>
            <MenuLateralItem path='#dashboard-react' label='Posts' icon='list-ul'/>
            <MenuLateralItem
                path='#create-post-react'
                label='Criar Post'
                icon='circle-o-notch'/>
        </MenuTree>
        <MenuTree label='React-Redux' icon='external-link-square'>
            <MenuLateralItem path='#dashboard-reduce' label='Posts' icon='list-ul'/>
            <MenuLateralItem path='#create-post-reduce' label='Criar Posts' icon='circle-o-notch'/>
        </MenuTree>
    </ul>
)