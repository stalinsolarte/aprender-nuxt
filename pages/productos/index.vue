<template>
    
    <div class="row">
        <div class="col-sm-6">
            <h2>Listado de Productos</h2>
            <div>
    <b-table striped hover :items="items"></b-table>
                </div> 
        </div>
        <div class="col-sm-6">
            <b-button variant="primary"
            href="/productos/crear">
                Nuevo
            </b-button>
           
        </div>
    </div>

    

</template>

