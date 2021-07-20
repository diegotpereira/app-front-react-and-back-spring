import React, { Component } from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CursoDataService from '../service/CursoDataService';

const INSTUTOR = 'in28minutes'

class CursoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            descricao: ''
        }

        this.enviar = this.enviar.bind(this)
        this.validar = this.validar.bind(this)
    }

    componentDidMount() {
        if (this.state.id == -1) {
            return 
        }

        CursoDataService.recuperarCurso(INSTRUTOR, this.state.id)
           .then(response => this.setState({
               descricao: response.data.descricao
           }))
    }

    validar(values) {
        let errors = {}
        if (!values.descricao) {
            errors.descricao = 'Entre com a descrição'
        } else if (values.descricao.length < 5) {
            errors.descricao = 'Entre com ultimos 5 caracters da descrição'
        }
        return erros
    }

    enviar(values) {
        
        let usuarionome = INSTRUTOR

        let curso = {
            id: this.state.id,
            descricao: values.descricao
        }

        if (this.state === -1) {
            CursoDataService.criarCurso(usuarionome, curso)
                .then(() => this.history.push('/cursos'))
        } else {
            CursoDataService.atualizarCurso(usuario, this.state.id, curso)
                .then(()=> this.props.history.push('/cursos'))
        }
        console.log(values);
    }
    render() {

        let {descricao, id} = this.state
        return (
            <div className="container">
                <h1>Detalhes do Curso</h1>
                <Formik 
                     initialValues = {{id, descricao}}
                     enviar = {this.enviar}
                     validarMudanca = {false}
                     validateOnBlur = {false}
                     validar = {this.validar}
                     habilitarReinicilizar = {true}>
                         {
                             (props) => (

                                 <Form>
                                     <ErrorMessage name="descricao" Component="div" className="alert alert-warning" />
                                        <fieldset className="form-group">
                                            <label>Id</label>
                                            <Field className="form-control" type="text" name="id" disabled />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Descricao</label>
                                            <Field className="form-control" type="text" name="descricao" />
                                        </fieldset>
                                        <button className="btn btn-success" type="submit">Salvaer</button>
                                 </Form>
                             )
                         }
                </Formik>
            </div>
            
        )
    }
}

export default CursoComponent