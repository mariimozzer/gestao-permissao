<template>
    <aside class="menu__container">
        <!-- <ul class="cabecalho_container"> -->
        <ul class="menu__lista">
            <!-- <li><img src="logo-roboflex-preta.png" alt=""></li> -->
            <li>
                <router-link to="/dashboard">Dashboard</router-link>
    
            </li>
            <li>
                <router-link to="/pessoa">Pessoas</router-link>
            </li>
            <li>
                <router-link to="/setores">Setores</router-link>
            </li>
            <li>
                <router-link to="/grupo">Grupos</router-link>
            </li>
            <li>
                <router-link to="/funcionalidade">Funcionalidades</router-link>
            </li>
            <li>
                <router-link to="/">Sair</router-link>
            </li>
    
        </ul>
    </aside>
</template>

<style scoped>
/* .cabecalho_container{
    display:  
} */

.menu__container {
    background-color: var(--first-color);
    position: fixed;
    bottom: 0%;
    height: 74px;
    width: 100%;
}

.menu__lista {
    display: flex;
    justify-content: space-around;
    height: 100%;
}

.menu__lista li {
    align-self: center;
}

.menu_lista {
    border-bottom: 1.5px solid var(--first-color);
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--first-color);
}

li {
    float: left;
    height: 100px;
}

li a {
    display: block;
    color: white;
    padding: 15px 17px;
    text-decoration: none;
    text-align: center;
}

li a:hover {
    background-color: var(--second-color);
}
</style>

