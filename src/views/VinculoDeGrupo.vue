
<template>
    
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2 class="titulo"> Vincular Grupos </h2>
                <hr>
                <!-- <Button @click="obterUsuarioPorGrupo(2)">teste</Button> -->

            </div>
            <div>
                <label>Selecione um grupo: </label>
    
                <select class="combo" v-model="grupoSelecionado" @change="handleGrupoSelecionadoChange">
                                                       
                     <option value="" disabled>Selecione o grupo</option>
                     <option v-for="item in gruposDisponiveis" :key="item.id" :value="item.id">{{ item.nome }}</option>
                                    </select>
    
                
                    <label>Usuários no grupo:</label>
                    <h1 v-for="user in filteredUsers" :key="user.id">{{ user.name }}</h1>
                  
                   
                
    
    
    
            </div>
    
        </div>
    </div>
</template>

<script>
import Grupo from '@/models/Grupo'
import grupoService from '@/services/grupo-service'
import Pessoa from '@/models/Pessoa'
import pessoaService from '@/services/pessoa-service'
import Usuario from '@/models/Usuario'
import usuarioService from '@/services/usuario-service'
//import GrupoUsuario from '@/models/Grupo_Usuario'
import grupoUsuarioService from '@/services/grupo_usuario-service'


export default {
    name: "VinculoDeGrupo",
    components: {},

    data() {
        return {
            gruposDisponiveis: [],
            grupoSelecionado: [],
            pessoas: [],
            usuarios: [],
            grupos: [],
            grupoUsuario: [],

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


        obterUsuarioPorGrupo(id) {
            grupoUsuarioService.obterPorId(id)
                .then(response => {
                    console.log('API Response:', response.data);
                    return this.grupoUsuario = response.data;
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

        handleGrupoSelecionadoChange() {
            if (this.grupoSelecionado) {
                this.obterUsuarioPorGrupo(this.grupoSelecionado);
            }
        },


        teste() {
            const sampleGroupId = 2; 
            this.obterUsuarioPorGrupo(sampleGroupId);
        }
    },



    computed: {

        filteredUsers() {



            // if (!this.grupoSelecionado || !this.usuarios.length || !this.grupoUsuario.length) {
            // console.log(this.grupoSelecionado)
            // console.log(this.usuarios)



            // }

            const selectedGroupId = parseInt(this.grupoSelecionado);
            return this.usuarios.filter(user => user.grupo_id === selectedGroupId);
        },


    },

    mounted() {
        this.getAllGrupos();
        this.getAllPessoas();
        this.getAllUsuarios();
    }
}
</script>

