<template>
  <div>
    <h2>Ejemplo de v-show</h2>
    <button @click="visible = !visible">
      {{ visible ? 'Ocultar' : 'Mostrar' }}
    </button>

    <p v-show="visible">Este texto se oculta con CSS, no se elimina del DOM.</p>
  </div>
</template>

<script>
export default {
  data() {
    return { visible: true }
  }
}
</script>
