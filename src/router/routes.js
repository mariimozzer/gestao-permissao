import PessoaView from "@/views/PessoaView"
import FuncionalidadeView from "@/views/FuncionalidadeView"
import GrupoView from "@/views/GrupoView"
import SetorView from "@/views/SetorView"
import HomeView from "@/views/HomeView"


const routes = [
{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pessoa',
    name: 'PessoaView',
    component: PessoaView,
    title: 'Pessoas'   
  },
  {
    path: '/funcionalidade',
    name: 'PessoaView',
    component: FuncionalidadeView,
    title: 'Funcionalidades'  
  },
  {
    path: '/grupo',
    name: 'GrupoView',
    component: GrupoView,
    title: 'Grupos'
    
  },
  {
    path: '/setor',
    name: 'SetorView',
    component: SetorView,
    title: 'Setores'
    
  }
];

export default routes


