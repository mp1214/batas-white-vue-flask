

const { createApp } = Vue

  createApp({
    data() {
      return {
        productos:[],
        showModal: false,
        imagenDron:"https://firebasestorage.googleapis.com/v0/b/white-con-amor.appspot.com/o/drones%2Fdrone-3198324_1280.jpg?alt=media&token=acdbf9b7-98a3-4421-ba7d-8ee0bb82d948",
        carga:true,
        editar:false,
      
        message:"Espere un momento a que se carguen los datos",
        url:'https://madepato.pythonanywhere.com/productos'
      }
    },
    methods: {
    
        fetchData(url) { 
           
           fetch(url)
            .then(response => response.json())
            .then(data => {
              console.log(data)
              this.productos=data
        this.carga=false
           })
            .catch(error=>{
               alert("Ups... se produjo un error: "+ error);
               this.error=true
             })
        
        }
      },
      created() {
        this.fetchData(this.url)
      }
    

  }).mount('#app')