<template>
  <div>
    <h2>Ejemplo de v-bind:key</h2>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, nombre: 'Elemento A' },
        { id: 2, nombre: 'Elemento B' },
        { id: 3, nombre: 'Elemento C' }
      ]
    }
  }
}
</script>
