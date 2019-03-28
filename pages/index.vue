<template>
  <div>

    

    <h1>hola {{msg}}</h1>
    <input type="text" v-model="msg">
    <button @click="guardar"
    class="btn btn-primary">Guardar</button>
    <b-button variant="primary">Guardar</b-button>
    <table>
      <tr>
        <th>nombre</th>
      </tr>
      <tr v-for="(item, index) in municipios" :key="index">
        <td>{{item}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
//import navbar from '../components/navbar'
//import contacto from './contacto'
//import contacto from './contacto'

export default {
  
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
  }
};
</script>
