<template>
    <div id="app">
    
        <!-- <HeaderComponent> </HeaderComponent>      -->
        <router-view/>
         <MenuComponent></MenuComponent>
        <FooterComponent></FooterComponent>
    
    </div>
</template>


<script>
import MenuComponent from "@/components/menu/MenuComponent.vue"
import FooterComponent from "@/components/footer/footerComponent"
// import HeaderComponent from "@/components/header/HeaderComponent.vue"



export default {
    components: {
        MenuComponent: MenuComponent,
        FooterComponent: FooterComponent,
        // HeaderComponent: HeaderComponent,
      
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
/* :root {
    --first-color: #0F213D;
    --second-color: #8A7D63;
} */




.titulo {
    font-weight: 600;
    color: #A6835E;
    font-size: 25px;
    margin-top: 10px;
}




.btn-primary,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:focus-visible,
.btn-primary:visited,
.btn-primary:not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: var(--first-color);
    border: var(--first-color);
    box-shadow: none;
    outline: none;
    min-width: 90px;
}

.btn-primary:hover {
    color: #fff;
    background-color: var(--first-color);
    border-color: var(--first-color);
}
</style>
