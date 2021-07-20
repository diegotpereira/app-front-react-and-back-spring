import axios from 'axios'

const INSTRUTOR = 'in28minutes'
const CURSOS_API_URL = 'http://localhost:8000'
const INSTRUTOR_API_URL =`${CURSOS_API_URL}/instrutores/${INSTRUTOR}`

class CursoDataService {

    recuperarTodosCursos(name) {
        return axios.get(`${INSTRUTOR_API_URL}/cursos`);
    }

    recuperarCursos(name, id) {
        return axios.get(`${INSTRUTOR_API_URL}/cursos/${id}`);
    }

    deletarCurso(name, id) {
        return axios.delete(`${INSTRUTOR_API_URL}/cursos/${id}`);
    }

    atualizarCurso(name, id, curso) {
        return axios.put(`${INSTRUTOR_API_URL}/cursos/${id}`, curso);
    }

    criarCurso(name, curso) {
        return axios.post(`${INSTRUTOR_API_URL}/cursos/`, curso);
    }
}

export default new CursoDataService()