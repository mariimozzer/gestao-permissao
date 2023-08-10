<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="titulo">{{modoCadastro ? "Adicionar" : "Editar" }} Pessoa </h1>
                <hr/>
                <br>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="id">ID</label>
                    <input id="id" type="text" v-model="funcionalidade.id" disabled class="form-control">
                </div>
            </div>
            <br>
            <div class="col-sm-10">
                <div class="form-group">
                    <label for="nome">Nome</label>
                    <input id="nome" v-model="funcionalidade.nome" type="text" class="form-control">
                </div>
            </div>
            <div class="col-sm-12">
                <div class="form-group">
                    <label for="url">URL</label>
                    <input id="url" type="text" v-model="funcionalidade.url" class="form-control">
                </div>
            </div>
            <div class="col-sm-5">
                <div class="form-group">
                    <label for="menu">Menu</label>
                    <input id="menu" type="text" v-model="funcionalidade.menu" class="form-control">
                </div>
            </div>
            <div class="col-sm-5">
                <div class="form-group">
                    <label for="sistema_id">Sistema ID</label>
                    <input id="sistema_id" type="text" v-model="funcionalidade.sistema_id" class="form-control">
                </div>
            </div>
    
        </div>
    
        <div class="row">
            <div class="col-sm-12">
                <hr>
                <br>
    
            </div>
            <div class="col-sm-12">
    
                <button @click="cancelar" class="btn btn-default float-right">Cancelar</button>
                <button @click="salvarFuncionalidade" class="btn btn-primary float-right mr-2">Salvar</button>
            </div>
        </div>
    </div>
</template>

<script>
import Funcionalidade from '@/models/Funcionalidade'
import funcionalidadeService from '@/services/funcionalidade-service';


export default {
    name: "FuncionalidadeComponent",
    data() {
        return {
            funcionalidade: new Funcionalidade(),
            modoCadastro: true
        }
    },


    mounted() {
        let id = this.$route.params.id;
        if (!id)

            return;

        this.modoCadastro = false;
        this.obterFuncPorId(id);

    },
    methods: {
        obterFuncPorId(id) {
            funcionalidadeService.obterPorId(id)
                .then(response => {
                    this.funcionalidade = new Funcionalidade(response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        cadastrarFuncionalidade() {

            funcionalidadeService.cadastrar(this.funcionalidade)
                .then(() => {
                    alert("Funcionalidade cadastrado com sucesso!");
                    this.funcionalidade = new Funcionalidade();


                })
                .catch(error => {
                    console.log(error);
                });
        },

        salvarFuncionalidade() {

            (this.modoCadastro) ? this.cadastrarFuncionalidade(): this.atualizarFuncionalidade();
        },
        atualizarFuncionalidade() {

            funcionalidadeService.atualizar(this.funcionalidade)
                .then(() => {
                    alert("Funcionalidade atualizado com sucesso!");
                    this.$router.push({ name: "ControleDeFuncionalidade" });

                })
                .catch(error => {
                    console.log(error);
                });
        },

        cancelar() {
            this.funcionalidade = new Funcionalidade();
            this.$router.push({ name: "ControleDeFuncionalidade" })
        }
    }
}
</script>

<style scoped>

</style>

