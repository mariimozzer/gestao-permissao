<template>
    <ul class="menu">
        <li>
            <a @click="() => this.$router.push({path:'/'})">Dashboard</a>
        </li>
        <li>
            <a @click="() => this.$router.push({path:'/pessoa'})">Pessoas</a>
        </li>
    
    
    </ul>
</template>

<script>
export default {
    name: "Menu",
    data() {
        return {

        }
    },

    methods: {

    }
}
</script>

