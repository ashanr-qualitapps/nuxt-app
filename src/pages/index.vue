<template>
  <div>
    <h1>Nuxt.js Web Application</h1>
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
