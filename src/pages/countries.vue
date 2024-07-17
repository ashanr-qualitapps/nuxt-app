<template>
    <div>
      <h1>Country List</h1>
      <CountryList />
    </div>
  </template>
  
  <script>
  import { CountryList } from 'vue-shared-components';
  
  export default {
    components: {
      CountryList
    }
  };
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>
  