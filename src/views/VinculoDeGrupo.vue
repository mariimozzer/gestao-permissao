
<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2 class="titulo"> Vincular Grupos </h2>
                <hr>
    
            </div>
            <div>
                <label>Selecione um grupo: </label>
                <select class="combo" v-model="grupoSelecionado">
                <option value="" disabled>Selecione o grupo</option>
                <option v-for="item in gruposDisponiveis" :key="item.id" :value="item.id">{{ item.nome }}</option>
                </select>
                <label>Usuários no grupo:</label>
                <ul>
                    <li v-for="user in filteredUsers" :key="user.id">{{ user.name }} ({{ user.email }}) </li>
    
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import grupoService from '@/services/grupo-service'
import pessoaService from '@/services/pessoa-service'
import Grupo from '@/models/Grupo'
import Pessoa from '@/models/Pessoa'
import Usuario from '@/models/Usuario'
import usuarioService from "@/services/usuario-service"

export default {
    name: "VinculoDeGrupo",
    components: {},

    data() {
        return {
            gruposDisponiveis: [],
            grupoSelecionado: '',
            pessoas: [],
            usuarios: [],
            grupos: []
        }
    },



    methods: {

        getAllUsuarios() {
            usuarioService.obterTodos()
                .then(response => {
                    this.usuarios = response.data.map((p) => new Usuario(p));

                })
                .catch(error => {
                    console.log(error)
                })
        },
        getAllGrupos() {
            grupoService.obterTodos()
                .then((response) => {
                    this.gruposDisponiveis = response.data.data.map((p) => new Grupo(p));
                })
                .catch(error => {
                    console.log(error)
                })
        },

        getAllPessoas() {
            pessoaService.obterTodos()
                .then((response) => {
                    this.pessoas = response.data.data.map((p) => new Pessoa(p));
                })
                .catch(error => {
                    console.log(error)
                })
        },

        obterGrupoPorId(id) {
            grupoService.obterPorId(id)
                .then(response => {
                    this.grupos = new Grupo(response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        },



    },

    computed: {
        filteredUsers() {
            if (!this.grupoSelecionado || !this.usuarios.length) {
                console.log("nada aqui")
                console.log(this.grupoSelecionado)
                console.log(this.usuarios)
                return [];
            }
            // console.log(this.usuarios.filter(user => user.grupo_id === this.grupoSelecionado))
            return this.usuarios.filter(user => user.grupo_id === this.grupoSelecionado);

        }


    },

    mounted() {

        this.getAllGrupos();
        this.getAllPessoas();
        this.getAllUsuarios();
        // this.getUsuarios(4)



    }

}
</script>

