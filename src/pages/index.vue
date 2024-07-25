<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold mb-6">Home Page</h1>
    <nuxt-link to="/countries" class="text-blue-500 hover:underline mb-4">Go to Country List</nuxt-link>
    <CountryList /> <!-- Use the shared component -->
  </div>
</template>

<script>
import { CountryList } from '~/static/dist/my-library.es.js'; // Import the shared component

export default {
  name: 'HomePage',
  middleware: 'auth',
  computed: {
    user() {
      return this.$store.getters['auth/getUser'];
    },
  },
  components: {
    CountryList
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
    },
  },
};
</script>

<style scoped>
</style>
