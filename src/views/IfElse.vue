<template>
  <div>
    <h2>Ejemplo de v-if / v-else-if / v-else</h2>
    <button @click="edad++">Incrementar edad ({{ edad }})</button>

    <p v-if="edad < 18">Eres menor de edad</p>
    <p v-else-if="edad >= 18 && edad < 60">Eres adulto</p>
    <p v-else>Eres adulto mayor</p>
  </div>
</template>

<script>
export default {
  data() {
    return { edad: 15 }
  }
}
</script>
