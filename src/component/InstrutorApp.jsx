 import React, { Component } from 'react';
import CursoComponent from './CursoComponent';
import ListaCursosComponent from './ListaCursosComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 class InstrutorApp extends Component {
     render() {
         return (

            <Router>
                <>
                  <h1>App de Instruções</h1>
                  <Switch>
                      <Route path="/" exact component = {ListaCursosComponent}/>
                      <Route path="/cursos" exact component = {ListaCursosComponent}/>
                      <Route path="/cursos/:id" component = {CursoComponent} />
                  </Switch>
                </>
            </Router>
         )
     }
 }

export default InstrutorApp