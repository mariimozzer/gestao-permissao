
<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2 class="titulo"> Vincular Grupos </h2>
                <hr>
    
    
            </div>
            <label>Selecione um grupo: </label>
            <select class="combo" v-model="grupoSelecionado">
                <option value="" disabled>Selecione o grupo</option>
            <option v-for="item in gruposDisponiveis" :key="item.id" :value="item.nome">{{ item.nome }}</option>
           
           </select>
    
           <input type="text" v-model="searchTerm" placeholder="Search" @input="filterPessoas">
           <ul>
            <li v-for="pessoa in filteredPessoas" :key="pessoa.id">{{ pessoa.nome }}</li>

           </ul>
    
            <!-- {{ gruposDisponiveis }}
           {{ getAllGrupos }} -->
        </div>
    
    
    </div>
</template>


<script>
import grupoService from '@/services/grupo-service'
import pessoaService from '@/services/pessoa-service'
import Grupo from '@/models/Grupo'
import Pessoa from '@/models/Pessoa'


export default {
    name: "VinculoDeGrupo",
    components: {

    },

    data() {
        return {
            gruposDisponiveis: [],
            grupoSelecionado: null,
            pessoas: [],
            searchTerm: ''


        }
    },

    methods: {
        getAllGrupos() {
            grupoService.obterTodos()
                .then((response) => {
                    this.gruposDisponiveis = response.data.data.map((p) => new Grupo(p));
                    // this.gruposDisponiveis.forEach(item => {
                    //     // console.log(item.nome);
                    // });
                    })

                  
                .catch(error => {
                    console.log(error)
                })
        },

        getAllPessoas(){
            pessoaService.obterTodos()
            .then((response) => {
                    this.pessoas = response.data.data.map((p) => new Pessoa(p));
                    this.pessoas.forEach(itemPessoas => {
                        console.log(itemPessoas.nome);
                    });
                    })

                  
                .catch(error => {
                    console.log(error)
                })

        },


        filterPessoas() {
            this.filteredPessoas = this.pessoas.filter(pessoa => {
                return pessoa.nome.toLowerCase().includes(this.searchTerm.toLowerCase());
            });
        },
    },
    

    computed:{
        filteredPessoas(){
            if (this.searchTerm === '') {
                return this.pessoas;
            } else {
                return this.pessoas.filter(pessoa => {
                    return pessoa.nome.toLowerCase().includes(this.searchTerm.toLowerCase());
                });
            }
        }
    },

    mounted() {
        this.getAllGrupos();
        this.getAllPessoas();
    }



}
</script>

<style scoped>

</style>

