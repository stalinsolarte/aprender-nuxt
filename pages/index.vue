<template>
  <div class="row mt-4">

    <div class="col-sm-3" v-for="producto in productos" :key="producto.id">
      <cardProducto :precio="producto.precio"
        :nombre="producto.nombre"
        :imagen="producto.imagen"/>
    </div>
    


  </div>
  
</template>

<script>
import {db} from '../services/firebase';
import cardProducto from '../components/cardProducto';
//import navbar from '../components/navbar'
//import contacto from './contacto'
//import contacto from './contacto'

export default {

  components: {cardProducto},

  asyncData(){
    return db.collection("productos").get().then(productosSnap => {
      let productos = [];

      productosSnap.forEach(value => {
        productos.push({
          id: value.id,
          ...value.data()
        });
      });
      return {
        productos
      }
    });
  },
  /*
  //components: {navbar, contacto},
  data() {
    return {
      msg: "stalin solarte",
      municipios: ["mocoa", "villagarzon", "pto asis"]
   
   };
  },
  methods: {
      guardar(){
          this.municipios.push(this.msg)
          this.msg=''
      }
  }*/

data() {
      return {
        /*slide: 0,
        sliding: null*/
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  

};
</script>
