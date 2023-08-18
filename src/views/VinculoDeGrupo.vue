
<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2 class="titulo"> Vincular Grupos </h2>
                <hr>
                <br>
            </div>
            <div>
                <label>Selecione um grupo: </label>
                <select class="combo" v-model="grupoSelecionado" @change="handleGrupoSelecionadoChange">
                                                            <option value="" disabled>Selecione o grupo</option>
                                                            <option v-for="item in gruposDisponiveis" :key="item.id" :value="item.id">(ID: {{item.id}} Nome: {{ item.nome }})</option></select>
            </div>
            <hr>
            <br>
            <div>
    
                <label>Usuários no grupo: </label>
                <ul>
                    <li v-for="user in grupoUsuario" :key="user.id">
                        <label>
                                <input type="checkbox" :value="user.id" v-model="selectedUsers" @change="toggleUserInGroup(user.id)"/> {{ user.name }} 
                            </label>
                    </li>
                </ul>
            </div>
            <hr>
            <br>
            <div>
                <label>Usuários disponíveis: </label>
                <ul>
                    <li v-for="user in usuariosParaAdicionar" :key="user.id">
                        <label>
                        <input type="checkbox" :value="user.id" v-model="selectedUsersToAdd" @change="toggleUserToAdd(user.id)"/>
                        {{ user.name }}
                        </label>
                    </li>
                   

                </ul>
            </div>
            <hr>
            <br>
            <div>
    
                <button @click="adicionarUsuarios">Adicionar Usuários</button>
    
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
import grupoUsuarioService from '@/services/grupo_usuario-service'


export default {
    name: "VinculoDeGrupo",
    components: {
     
    },

    data() {
        return {
            
            gruposDisponiveis: [],
            grupoSelecionado: null,
            pessoas: [],
            usuarios: [],
            grupos: [],
            grupoUsuario: [],
            selectedUsersToAdd: [],
            selectedUsers: []

        }
    },

    methods: {

        adicionarUsuarios() {
            if (!this.grupoSelecionado || this.selectedUsersToAdd.length === 0) {
                return;
            }

            grupoUsuarioService
                .cadastrar(this.selectedUsersToAdd, this.grupoSelecionado)
               
                .then(() => {
                    this.obterUsuarioPorGrupo(this.grupoSelecionado);
                    this.selectedUsersToAdd = []; 
                })
                .catch(error => {
                    console.log(error);
                });
                console.log((this.selectedUsersToAdd, this.grupoSelecionado))
        },

        toggleUserInGroup(userId) {

            if (this.selectedUsers.includes(userId)) {
                this.selectedUsers = this.selectedUsers.filter(id => id !== userId);
                grupoUsuarioService.deletar(this.grupoSelecionado, [userId]);
            } else {
                this.selectedUsers.push(userId);
                grupoUsuarioService.cadastrar(this.selectedUsers, this.grupoSelecionado);
            }
        },

        toggleUserToAdd(userId) {
            if (this.selectedUsersToAdd.includes(userId)) {
                this.selectedUsersToAdd = this.selectedUsersToAdd.filter(id => id !== userId);
            } else {
                this.selectedUsersToAdd.push(userId);
            }
        },

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
                    // console.log('API Response:', response.data);
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

    },



    computed: {

        filteredUsers() {
            const selectedGroupId = parseInt(this.grupoSelecionado);
            return this.usuarios.filter(user => user.grupo_id === selectedGroupId);
        },

        usuariosParaAdicionar() {
            return this.usuarios.filter(user => !this.grupoUsuario.some(grupoUser => grupoUser.id === user.id));
        }
    },

    mounted() {
        this.getAllGrupos();
        this.getAllPessoas();
        this.getAllUsuarios();

    }
}
</script>

