import React from 'react';
import { HashRouter } from 'react-router-dom';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Logo from '../components/template/logo';
import Nav from '../components/template/nav';
import Footer from '../components/template/footer';
import Routes from './routes'

export default props => {

    return (

        <HashRouter>
            <div className="app">
                <Logo/>
                <Nav/>
                <Routes/>
                <Footer/>
            </div>
        </HashRouter>
        
    )

}