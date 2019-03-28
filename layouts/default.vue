<template>
    <div>
        <h1>esto se repite en todas las paginas</h1>
        <navbar />
        <nuxt />
        esto es un footer
    </div>
</template>

<script>
import navbar from '../components/navbar'
export default {
    components: {navbar},
}
</script>
