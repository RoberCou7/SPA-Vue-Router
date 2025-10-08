<template>
  <div id="app">
    <h1>SPA con Vue Router</h1>
    <p>Proyecto realizado por:</p>
    <ul>
      <li>Roberto Coutiño</li>
      <li>Eduardo Moreno</li>
      <li>Adrian Moguel</li>
    </ul>

    <nav>
      <router-link to="/ifelse">v-if</router-link> |
      <router-link to="/show">v-show</router-link> |
      <router-link to="/for">v-for</router-link> |
      <router-link to="/bindkey">v-bind:key</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

