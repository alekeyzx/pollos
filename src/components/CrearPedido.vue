<template>
    <div class="row">
      <div class="column">
        <img src="https://i.imgur.com/qI8znuq.png" alt="Pollo" style="width:100%">
      </div>
      <div class="column">
        <img src="https://i.imgur.com/yNvZs2e.png" alt="Taco" style="width:100%">
      </div>
      <div class="column">
        <img src="https://i.imgur.com/pMF8B7Q.png" alt="Menudo" style="width:100%">
      </div>
      <div class="column">
        <img src="https://i.imgur.com/wAbTEuZ.png" alt="Burrito" style="width:100%">
      </div>
      <div class="column">
        <img src="https://i.imgur.com/QCKF0jx.png" alt="receta especial" style="width:100%">
      </div>
    </div>
    <br>
 <div>
        <form v-on:submit.prevent="agregarRegistro">
            <label class="label" for="inpNombre">Nombres:⠀⠀</label>
            <input class="input" type="text" id="inpNombre" v-model="Pedido.inpNombre">
            <br> <br>
            
            <label class="label" for="inpTelefono">Teléfono: ⠀</label>
            <input class="input" type="tel" id="inpTelefono" v-model="Pedido.inpTelefono">
            <br> <br>

            <label class="label" for="inpDireccion">Dirección:⠀</label>
            <textarea class="input" id="inpDireccion" v-model="Pedido.inpDireccion"></textarea>
            <br> <br>

            <label class="label" for="inpPollo">Pollo Asado:</label> 
            <input class="counter" type="number"  id="inpPollo" min="0" max="99" v-model="Pedido.inpPollo" > 
            <label class="label">⠀❖⠀⠀</label>

            <label class="label" for="inpBurrito">Burrito de Pollo:</label>
            <input class="counter" type="number" id="inpBurrito" min="0" max="99" v-model="Pedido.inpBurrito"> 
            <label class="label">⠀❖⠀⠀</label>

            <label class="label" for="inpTaco">Taco de Pollo:</label>
            <input class="counter" type="number" id="inpTaco" min="0" max="99" v-model="Pedido.inpTaco"> 
            <label class="label">⠀❖⠀⠀</label>

            <label class="label" for="inpMenudo">"Menudo" de Pollo:</label>
            <input class="counter" type="number" id="inpMenudo" min="0" max="99" v-model="Pedido.inpMenudo">  
            <br><br>
            <div>
               <label class="label" for="">Salsa:</label><br>
            <input type="radio" id="inpSalsa" name="inpSalsa" value="1" v-model="Pedido.inpSalsa">
            <label class="label" for="inpSalsa">Con Salsa</label>
            <input type="radio" id="inpSinSalsa" name="inpSinSalsa" value="2" v-model="Pedido.inpSalsa">
            <label class="label" for="inpSinSalsa">Me da miedo</label>
            </div>
           
            <br><br>
            <button class="boton" type="submit">Hacer Pedido </button>
            <br><br>
        </form>
      </div>
</template>
<script>

export default {
  data() {
    return {
      inpPollo:0,
      inpBurrito:0,
      inpTaco:0,
      inpMenudo:0,
      Pedido:{},
      
    }
  },
  created() {
    // puedes establecer el valor inicial en el método created también
    this.Pedido.inpPollo=0
    this.Pedido.inpBurrito=0
    this.Pedido.inpTaco=0
    this.Pedido.inpMenudo=0
    
    
  },
  methods:{
    agregarRegistro(){
      var encargo=""
      var precioF=0
      var salsasF=""

      if(this.Pedido.inpPollo > 0)
      {
        encargo += "Pollo asado: " + this.Pedido.inpPollo + "\n"
        precioF += parseInt(this.Pedido.inpPollo) * 120

      }if(this.Pedido.inpBurrito > 0)
      {
        encargo += "Burritos: " + this.Pedido.inpBurrito + "\n"
        precioF += this.Pedido.inpBurrito * 65
      }if(this.Pedido.inpTaco > 0)
      {
        encargo += "Tacos: " + this.Pedido.inpTaco + "\n"
        precioF += this.Pedido.inpTaco * 20
      }if(this.Pedido.inpMenudo > 0)
      {
        encargo += "Menudo: " + this.Pedido.inpMenudo + "\n"
        precioF += this.Pedido.inpMenudo * 80
      }
      if (this.Pedido.inpSalsa == 1){
        salsasF+= "salsas: Si"
      }else{
        salsasF+= "Salsas: No"
      }

      console.log(encargo + " "+ precioF + salsasF)
      
      var datosEnviar ={Nombre:this.Pedido.inpNombre,Telefono:this.Pedido.inpTelefono,Direccion:this.Pedido.inpDireccion,Pedido: encargo,Salsas: salsasF,Precio: precioF}
      fetch('http://localhost/insertar/',{
        method:"POST",
        body: JSON.stringify(datosEnviar)
      })
      .then(respuesta => respuesta.json())
      .then((datosRespuesta=>{
        console.log(datosRespuesta);
        window.location.href=""
      }))
    }
  }
};
</script>


<style>
html:after,
html:before {
    content:"";
    display:block;
    background-color:#06142c;
    background-image:linear-gradient(45deg,#941c21 25%,transparent 0,transparent 75%,#941c21 0,#941c21),linear-gradient(-45deg,#941c21 25%,transparent 0,transparent 75%,#941c21 0,#941c21);
    background-size:32px 32px;
    background-size:2rem 2rem;
    background-position:50%;
    height:32px;
    height:2rem
}
body{   
    background: #FCCC00;
}
.row {
    display: flex;
}  
.column {
    flex: 33.33%;
    padding: 5px;
}
.label{
    color: darkred;
    font-family: 'Tilt Warp', cursive;
}
.input{
    border: 2px solid rgb(191, 48, 48);
    background-color: #ffe15b;
    border-radius: 4px;
    border-style: dashed;
    outline: none;
    width: 300px;
    color: #525252;
    font-family: 'Tilt Warp', cursive;
}
.input:focus {
    border: 2px dashed darkred;
    color: rgb(0, 0, 0);
}
.counter{
    margin-left: 5px;
    border: 2px solid rgb(191, 48, 48);
    background-color: #ffe15b;
    border-radius: 4px;
    border-style: dashed;
    outline: none;
    width: 37px;
    color: #525252;
    font-family: 'Tilt Warp', cursive;
}
.boton{
	background-color:rgb(18, 18, 143);
	border-radius:28px;
	border:1px solid rgb(5, 5, 88);
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
    font-family: 'Tilt Warp', cursive;
	font-size:15px;
	padding:6px 9px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
}
.boton:hover{
    background-color: rgb(1, 1, 27);
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