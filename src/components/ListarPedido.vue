<template>
   <div class="container">
    <button id="botonActu" v-on:click="actualizarPedidos()">Actualizar</button>
    <div class="papel" v-for="pedidos in pedidos" :key="pedidos.Id" >
        <h4 style="display:none">Id</h4 >
        <div id="linea" style="display:none">
            {{ pedidos.Id }}
        </div>
        <br>
        <h4>Nombre</h4>
        <div id="linea">
            {{ pedidos.Nombre }}
        </div>
        <br>
        <h4>Telefono</h4>
        <div id="linea">
            {{ pedidos.Telefono }}
        </div>
        <h4>Direccion</h4>
        <div id="linea">
            {{ pedidos.Direccion }}
        </div>
        <h4>Pedido</h4>
        <div id="linea">
            {{ pedidos.Pedido }}
        </div>
        <h4>Salsas</h4>
        <div id="linea">
            {{ pedidos.Salsas }}
        </div>
        <h4>Precio</h4>
        <div id="linea">
            {{ pedidos.Precio }}
        </div>

        <button id="botonEliminar" v-on:click="borrarPedido(pedidos.Id)">Entregado</button>

    </div>
   </div>
     
        
            
        
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            pedidos: []
        }
    },
    created:function(){
        this.consultarEmpleadosAxios();
        this.prueba();
       
    },
    
    methods:{
        async consultarEmpleadosAxios(){
            axios.get("http://localhost/pedidos/" , {
            timeout: 3000000 // Establece el tiempo de espera en 30 segundos
            })
            .then(response =>{
                this.pedidos = response.data
                console.log(this.pedidos)
               // this.consultarEmpleadosAxios()
            })
            .catch(error => {
                console.error(error)
                /*this.consultarEmpleadosAxios() // Hace una nueva solicitud en caso de error*/
            })
        },
            borrarPedido(PId){
            console.log(PId)
            var datosEnviar ={Id: PId}
            fetch('http://localhost/Eliminar/',{
            method:"POST",
            body: JSON.stringify(datosEnviar)
            })
            .then(respuesta => respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.consultarEmpleadosAxios();
            })
        },
        prueba(){
            setInterval(() => {
            this.consultarEmpleadosAxios();
            console.log("hola")
        }, 1000*10);
        },
        actualizarPedidos(){
            console.log("pruebaConsulta")
            this.consultarEmpleadosAxios();
        }
        

    }
}
</script>
<style>
.papel {
  background-color: #fff;
  background-image: url('https://lh3.googleusercontent.com/8Ykoobxh9Y_NSQC5fThcuSKw8UuGblDaDnnLZB-kQ7I3MEWgrT3iTFZ6zsHTd7L1qeeJy1RNavylrRoTzBYkyEG0kL3lqUlCM7czpSfVhYzr-7e8ZV2TM5uuGohKElCyLhEf6Ihg');
  background-size: cover;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 2px;
  display: inline-block;
  border: black 1px solid;
  margin: 5px;
  width: 250px;
  
}
h4{
text-align: center;

}
#linea{
    border-bottom: black 1px solid;
}
#botonEliminar{
    
    display: block;
    margin: auto;
    margin-top: 15px;
	background-color: rgb(143, 93, 0);
	border-radius:28px;
	border:1px solid rgb(5, 5, 88);
	
	cursor:pointer;
	color:#ffffff;
    font-family: 'Tilt Warp', cursive;
	font-size:15px;
	padding:6px 9px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
}
#botonEliminar:hover{
    background-color: rgb(255, 162, 0);
    color: black;
}

#botonActu{
    
    display: block;
    margin: auto;
    margin-top: 15px;
	background-color: rgb(0, 243, 93);
	border-radius:28px;
	border:1px solid rgb(5, 5, 88);
	
	cursor:pointer;
	color:#000000;
    font-family: 'Tilt Warp', cursive;
	font-size:15px;
	padding:6px 9px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
}
#botonActu:hover{
    background-color: rgb(1, 80, 56);
    color: rgb(255, 255, 255);
}
</style>