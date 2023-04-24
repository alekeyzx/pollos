<template>
  <div class="header" style="background-image: url('https://i.imgur.com/xonoeHW.jpg'); background-position: 0 50%;">
    <a href="/"><img src="https://i.imgur.com/oJ3IWgj.png" alt="Los Pollos Asados"></a>
    </div> 
  <nav class="menubar" >
    <router-link to="/">
     <p>❖ Ordenar ❖</p> 
    </router-link>
    <router-link to="/listar">
      <p>
        ❖ Pedidos ❖
      </p>
    </router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}



nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: rgb(255, 230, 0);
}
.header {
    margin: -0.55% -1% -1% -1% !important;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
    background-position:0 50%;
    background-repeat:no-repeat;
    background-size:cover;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    height:22em;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center
   }
   .menubar{
    height: 40px;
    background-color: #002a86;
    margin: -0.6% -1% 1% -1% !important;
    -ms-flex-align:center;
    align-items:center;
    background-position:0 50%;
    background-repeat:no-repeat;
    background-size:cover;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center;
    text-align: center;
    color: rgb(251, 241, 241);
    font-size: 20px;
    font-family: 'Oswald', sans-serif;
    font-family: 'Tilt Warp', cursive;
}
</style>
