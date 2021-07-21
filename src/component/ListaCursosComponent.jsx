import React, { Component } from 'react'
import CursoDataService from '../service/CursoDataService';

class ListaCursosComponent extends Component {

    constructor(props){
        super(props)
        this.state = {cursos : [], message: null}
        this.deletarCursoClicked = this.deletarCursoClicked.bind(this)
        this.atualizarCursoClicked = this.atualizarCursoClicked.bind(this)
        this.refreshCursos = this.refreshCursos.bind(this);
        this.addCursoClicked = this.addCursoClicked.bind(this)
        this.refreshCursos = this.refreshCursos.bind(this)
    }

    componentDidMount() {
        this.refreshCursos();
    }

    refreshCursos() {
        CursoDataService.recuperarTodosCursos()
            .then(
                response => {
                    //console.log(response);
                    this.setState({cursos : response.data})
                }
            )
    }

    deletarCursoClicked(id) {
        CursoDataService.deletarCurso(id)
          .then(
              response => {
                  this.setState({message : `O Curso de ${id} foi excluído com sucesso!.`})
                  this.refreshCursos()
              }
          )
    }
    addCursoClicked() {
        this.props.history.push(`/cursos/-1`)
    }

    atualizarCursoClicked(id) {
        console.log('update' + id)
        this.props.history.push(`/cursos/${id}`)
    }
    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>Lista de Cursos</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Descrição</th>
                                <th>Atualizar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cursos.map(
                                    curso =>
                                        <tr key={curso.id}>
                                            <td>{curso.id}</td>
                                            <td>{curso.descricao}</td>
                                            <td><button className="btn btn-success" onClick={() => this.atualizarCursoClicked(curso.id)}>Atualizar</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deletarCursoClicked(curso.id)}>Excluir</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addCursoClicked}>Adicionar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListaCursosComponent