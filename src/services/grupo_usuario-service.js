import api from './api';

function obterPorId(id){
    return new Promise((resolve, reject) => {
        return api.get(`/grupo/${id}/usuarios`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function cadastrar(usuario,grupo){
    return new Promise((resolve, reject) => {
        return api.post(`/usuario/grupo`,usuario, grupo)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

// function deletar(id){
//     return new Promise((resolve, reject) => {
//         return api.delete(`/usuario/grupo/`)
//         .then(response => resolve(response))
//         .catch(error => reject(error));
//     });
// }


export default {

    obterPorId,
    cadastrar,
    // deletar
}