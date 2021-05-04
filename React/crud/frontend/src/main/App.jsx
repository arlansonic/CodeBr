import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'
import Header from '../components/template/Header'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Header />
        <Main icon="home" title="Home"
            subtitle="Segundo Projeto de React" >
            <div className="display-4">Bem Vindo!</div>
            <hr/>
            <p className="mb-0">Sistema para exemplificar a construção de um cadastro
            desenvolvido em React!
            </p>
        </Main>
        <Footer />
    </div>