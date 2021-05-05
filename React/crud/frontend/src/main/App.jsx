import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Header from '../components/template/Header'


export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Header />            
            <Routes/> 
            <Footer />
        </div>
    </BrowserRouter>

    //HashRouter : Link com #
    // BrowserRouter : Link padrão sem #