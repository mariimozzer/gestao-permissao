<template>
    <header>
    
        <nav class="cabecalho__container">
            <h1 class="logo__item" href="#"></h1>
    
            <div class="cabecalho__icones__item">
    
                <a href="#" class="cabecalho__notificacoes"></a>
                <a href="#" class="cabecalho__avatar"></a>
            </div>
    
        </nav>
    
    </header>
</template>

<style>
.logo__item {
    background-image: url(/public/logoroboflex.png);
    background-repeat: no-repeat;
    padding: 15px 65px;
   
    cursor: pointer;
}
.cabecalho__container {
    display:flex;
            justify-content: space-between  ;
            align-items: center;
            position: fixed;
            top:0;
            background-color: var(--first-color);
}

.cabecalho__avatar {
    background-image: url(./Avatar.png);
    background-repeat: no-repeat;
    background-position: center;
    padding: 13px 30px 13px 13px;
}

.cabecalho__notificacoes {
    background-image: url(./notifications.png);
    background-repeat: no-repeat;
    background-position: center;
    padding: 13px 30px 13px 13px;
}
</style>