import React from 'react'

export default props => (
    <header className='main-header'>
        <a href="/#/" className="logo">
            <span className='logo-mini'>
                <b>TD</b>A</span>
            <span className='logo-lg'>
                <i className="fa fa-calendar-check-o"></i>
                <b> Todo</b>App
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>

// <nav className='navbar navbar-inverse bg-inverse'>     <div
// className='container'>         <div className='navbar-header'>             <a
// href="#" className="navbar-brand">                 <i className="fa
// fa-calendar-check-o"></i>
//                 TodoApp             </a>         </div>         <div
// id='navbar' className='navbar-collapse collapse'>             <ul
// className="nav navbar-nav">                 <li><a
// href="#/todos">Tarefas</a></li>                 <li><a
// href="#/about">Sobre</a></li>             </ul>         </div>     </div> < /nav>
)