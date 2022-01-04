<template>
  <div id="app">
    <nav>
      <img alt="Profrec Logo" src="./assets/logo.png" width="100" height="100">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'Login' }">Login</router-link>
      <router-view />
    </nav>
  </div>
</template>