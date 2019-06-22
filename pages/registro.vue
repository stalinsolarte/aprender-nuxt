<template>
    <b-form @submit.prevent="registro">
        <div class="row mt-3">
            <div class="col-xs-6 col-sm-5 col-md-6">
                <h4>Registro de Usuario</h4>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <b-form-group label="nombre" label-for="nombre">
                    <b-form-input 
                    
                    type="text"
                    required v-model="form.name"
                    placeholder="Ingrese nombre de usuario"
                    />
                </b-form-group>

                <b-form-group label="Email" label-for="email">
                    <b-form-input
                    id="email"
                    type="text"
                    required v-model="form.email"
                    placeholder="Ingresar el email del usuario"
                    />
                                  
                </b-form-group>

                <b-form-group label="contraseña" label-for="nombre">
                    <b-form-input
                    id="nombre"
                    type="password"
                    required v-model="form.password"
                    placeholder="Ingresar la contraseña"
                    />
                </b-form-group>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 offset-sm-5">
                <b-button-toolbar>
                    <b-button-group right-class="mx-2">
                         <b-button variant="primary" type="submit" :disabled="guardando">guardar</b-button>
                    </b-button-group>
                </b-button-toolbar>    
            </div>
        </div>
    </b-form>
</template>


<script>
import {auth} from'../services/firebase'

export default {
        data(){
            return{
                form: {

                }
            };
        },
    methods:{
        registro(){
            auth.createUserWithEmailAndPassword(this.form.email, this.form.password).then(res => {
                /*alert("Registro exitoso")*/
                res.user.updateProfile({
                    displayName: this.form.name
                }).then(resUpdate =>{
                     this.$router.push({
                    path:"/"
                })

                })
               
            }).catch(err =>{
                alert("Ha ocurrido un error")})
        }
    }
}
</script>
