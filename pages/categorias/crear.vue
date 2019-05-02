<template>
  <form name="from categorias" @submit.prevent="guardarCategorias">
    <h1>Desde categorias- Crear</h1>
    <b-container class="bv-example-row">
      <b-row>
        <b-col col="12" md="4" offset-md="4">

            
            <div class="form-group">
              <!--
              <label for="url">imagen</label>
              <input
                type="text"
                class="form-control"
                name="url"
                placeholder="ingresar url"
                
              > -->
              <label for="nombre">Nombre de la categoria</label>
              <input
                type="text"
                class="form-control"
                name="Nombre de la categoria"
                placeholder="ingresar categoria"
                v-model="form.nombre"
                required
              >
              <!--
              <label for="precio">Precio</label>
              <input
                type="number"
                class="form-control"
                name="precio"
                placeholder="ingresar precio"
                v-model="form.precio"
                required
              >
              <label for="cantidad">cantidad</label>
              <input
                type="number"
                class="form-control"
                name="cantidad"
                placeholder="ingresar cantidad"
                v-model="form.cantidad"
                
                required
              >
              -->
            </div>
            <div class="row" id="galeria"></div>
          
        </b-col>
      </b-row>

      <b-row class="text-center">
        <b-col lg="6" md="6" offset-md="3">
          <b-button variant="primary" href="/categorias">volver</b-button>
          <b-button variant="primary" type="submit"
          :disabled="guardando">
            <b-spinner small
            v-if="guardando"></b-spinner>
            <span class="sr-only">Loading...</span>
            guardar</b-button>
        </b-col>
      </b-row>
    </b-container>
  </form>
</template>

<script>

import{ db } from '../../services/firebase'

export default {
    data(){
        return {
            form:{
              nombre: ''
              //cantidad: '',
              //precio:'',  
            },
            
            guardando: false,
            
        }
    },
    methods:{
        guardarCategorias(){
          this.guardando = true
                      db.collection("categorias").add(this.form).then(res => { 
                this.$router.push({
                    path: "/categorias"
                })
            })
        }
    }
}
</script>
