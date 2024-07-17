<template>
    <div>
      <h1>Home Page</h1>
      <nuxt-link to="/countries">Go to Country List</nuxt-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  };
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>
  