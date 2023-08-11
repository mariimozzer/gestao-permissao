import PessoaView from "@/views/PessoaView"
import FuncionalidadeView from "@/views/FuncionalidadeView"
import GrupoView from "@/views/GrupoView"
import SetorView from "@/views/SetorView"
import HomeView from "@/views/HomeView"
import ControleDePessoas from "@/views/ControleDePessoas"
import ControleDeSetores from "@/views/ControleDeSetores"
import ControleDeGrupo from "@/views/ControleDeGrupo"
import ControleDeFuncionalidade from "@/views/ControleDeFuncionalidade"

const routes = [
{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pessoa',
    name: 'ControleDePessoas',
    component: ControleDePessoas,
    title: 'Pessoa'   
  },
  {
    path: '/controle-de-pessoas/novo',
    name: 'AdicionarPessoa',
    component: PessoaView,
    title: 'Adicionar Pessoa'   
  },
  {
    path: '/controle-de-pessoas/editar',
    name: 'EditarPessoa',
    component: PessoaView,
    title: 'Editar Pessoa'   
  },
  {
    path: '/controle-de-pessoas/excluir',
    name: 'ExcluirPessoa',
    component: PessoaView,
    title: 'Excluir Pessoa'   
  },
  {
    path: '/setores',
    name: 'ControleDeSetores',
    component: ControleDeSetores,
    title: 'Setor'   
  },
  {
    path: '/controle-de-setores/novo',
    name: 'AdicionarSetor',
    component: SetorView,
    title: 'Adicionar Setor'   
  },
  {
    path: '/controle-de-setores/editar',
    name: 'EditarSetor',
    component: SetorView,
    title: 'Editar Setor'   
  },
  {
    path: '/controle-de-setores/excluir',
    name: 'ExcluirSetor',
    component: SetorView,
    title: 'Excluir Setor'   
  },
  {
    path: '/grupo',
    name: 'ControleDeGrupo',
    component: ControleDeGrupo,
    title: 'Grupos'
    
  },
  {
    path: '/controle-de-grupo/novo',
    name: 'AdicionarGrupo',
    component: GrupoView,
    title: 'Adicionar Grupo'
    
  },
  {
    path: '/controle-de-grupo/editar',
    name: 'EditarGrupo',
    component: GrupoView,
    title: 'Editar Grupo'
    
  },
  {
    path: '/controle-de-grupo/excluir',
    name: 'ExcluirGrupo',
    component: GrupoView,
    title: 'Excluir Grupo'
    
  },
  {
    path: '/funcionalidade',
    name: 'ControleDeFuncionalidade',
    component: ControleDeFuncionalidade,
    title: 'Funcionalidade'  
  },
  {
    path: '/funcionalidade/novo',
    name: 'AdicionarFuncionalidade',
    component: FuncionalidadeView,
    title: 'Adicionar Funcionalidade'  
  },
  {
    path: '/funcionalidade/editar',
    name: 'EditarFuncionalidade',
    component: FuncionalidadeView,
    title: 'Editar Funcionalidade'  
  },
  {
    path: '/funcionalidade/excluir',
    name: 'ExcluirFuncionalidade',
    component: FuncionalidadeView,
    title: 'Excluir Funcionalidade'  
  },
];

export default routes


