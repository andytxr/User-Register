import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Main from './../components/template/main';
import Logo from '../components/template/logo';
import Nav from '../components/template/nav';
import Footer from '../components/template/footer';

export default props => {

    return (

        <div className="app">
            <Logo/>
            <Nav/>
            <Main icon="home" title="Início" subtitle="Projeto 2"/>
            <Footer/>
        </div>

    )

}