import api from './api';

function obterPorId(id){
    return new Promise((resolve, reject) => {
        return api.get(`/grupo/${id}/usuarios`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function cadastrar(usuarioId, grupoId) {
    const payload = {
      idUser: usuarioId,
      idGrupo: grupoId
    };
  
    return new Promise((resolve, reject) => {
      return api.post(`/usuario/grupo`, payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }






// function cadastrar(){
//     return new Promise((resolve, reject) => {
//         return api.post(`/usuario/grupo`)
//         .then(response => resolve(response))
//         .catch(error => reject(error));
//     });
// }

function deletar(){
    return new Promise((resolve, reject) => {
        return api.delete(`/usuario/grupo/`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}


export default {

    obterPorId,
    cadastrar,
    deletar
}