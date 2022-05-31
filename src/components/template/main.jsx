import React from 'react';

import './main.css'

import Header from './header';
export default props => {

    return(

        <React.Fragment>
            <Header {...props}/>
            <main className="content">
                Content
            </main>
        </React.Fragment>

    )


}