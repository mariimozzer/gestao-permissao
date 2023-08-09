<template>
  <div id="app">
   
    <MenuComponent></MenuComponent>
    <router-view/>
  </div>
</template>


<script>
import MenuComponent from "@/components/menu/MenuComponent.vue"

export default{
  components:{
    MenuComponent: MenuComponent
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
:root {
    --first-color: #6c5b7b;
    --second-color: #c06c84;
}
body {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Quicksand', sans-serif;
}

.container {
    margin-top: 15px;
}

.titulo {
    font-weight: 600;
    color: dimgray;
    font-size: 25px;
    margin-top: 10px;
}

hr {
    margin: 0px;
}

.sub-container {
    margin-top: 15px;
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
