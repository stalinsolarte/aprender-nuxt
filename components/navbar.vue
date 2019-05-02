<template>
    <!--div>
        <a href="/">inicio</a>
        <a href="/contacto">contacto</a>
    </div-->
    <b-navbar variant="danger"
        type="dark"
        toggleable="lg">
        <b-navbar-brand href="/">
        Bootstrapvue
        </b-navbar-brand>
        
        <b-navbar-toggle target="menu">
        </b-navbar-toggle>

        <b-collapse is-nav id="menu">
            <b-navbar-nav>
                <b-nav-item 
                    href="/contacto">
                    contacto
                </b-nav-item>
                <b-nav-item href="/productos">
                    Productos
                </b-nav-item>
                <b-nav-item href="/categorias">
                    Categorias
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>

    

    </b-navbar>

</template>

<script>
export default {
    
}
</script>
