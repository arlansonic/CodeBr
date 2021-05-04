import './Logo.css'
import logo from '../../assets/imgs/logo.png'
import React from 'react'

export default props =>
    <aside className="Logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo"/>
        </a>
    </aside>