import React from 'react';

import Main from '../template/main';

export default props => {

    return(

        <Main icon="home" title="Início" subtitle="Projeto 2">
            <div className="display-4">Bem Vindo!</div>
                <hr></hr>
            <p className="mb-0">Sistema de Cadastro em React!</p>
        </Main>

    )

}