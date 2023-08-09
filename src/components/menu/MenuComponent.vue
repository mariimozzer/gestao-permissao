<template>
    <ul>
        <li>
            <a @click="() => this.$router.push({path:'/'})">Dashboard</a>
        </li>
        <li>
            <a @click="() => this.$router.push({path:'/pessoa'})">Pessoas</a>
        </li>
        <li>
            <a @click="() => this.$router.push({path:'/grupo'})">Grupos</a>
        </li>
        <li>
            <a @click="() => this.$router.push({path:'/Setor'})">Setor</a>
        </li>
    
    
    </ul>
</template>

