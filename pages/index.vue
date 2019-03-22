<template>
  <div>
    <h1>hola {{msg}}</h1>
    <input type="text" v-model="msg">
    <button @click="guardar">Guardar</button>
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
export default {
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
