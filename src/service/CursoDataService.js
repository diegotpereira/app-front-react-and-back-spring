import http from "../http-common";


class CursoDataService {

    recuperarTodosCursos() {
        return http.get("/cursos");
    }

    recuperarCursos(id) {
        return http.get("/cursos/${id}");
    }

    deletarCurso(id) {
        return http.delete("/cursos/${id}");
    }

    atualizarCurso(id, data) {
        return http.put("/cursos/${id}", data);
    }

    criarCurso(data) {
        return http.post("/cursos/", data);
    }
}

export default new CursoDataService()