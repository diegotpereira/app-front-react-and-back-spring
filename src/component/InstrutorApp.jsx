 import React, { Component } from 'react';
import CursoComponent from './CursoComponent';
import ListaCursosComponent from './ListaCursosComponent';

 class InstrutorApp extends Component {
     render() {
         return (

            <Router>
                <>
                  <h1>App de Instruções</h1>
                  <switch>
                      <Route path="/" exact component = {ListaCursosComponent}/>
                      <Route path="/cursos" exact component = {ListaCursosComponent}/>
                      <Route path="/cursos/:id" component = {CursoComponent} />
                  </switch>
                </>
            </Router>
         )
     }
 }

export default InstrutorApp