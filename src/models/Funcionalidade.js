export default class Grupo {
    
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.URL = obj.URL;
        this.menu = obj.menu;
        this.sistema_id = obj.sistema_id;
    }
}