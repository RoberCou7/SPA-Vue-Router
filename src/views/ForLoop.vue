<template>
  <div>
    <h2>Ejemplo de v-for</h2>
    <ul>
      <li v-for="(fruta, index) in frutas" :key="index">
        {{ index + 1 }} - {{ fruta }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { frutas: ['Manzana', 'Banana', 'Naranja', 'Pera'] }
  }
}
</script>
