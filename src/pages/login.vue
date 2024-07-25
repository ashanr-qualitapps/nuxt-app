<template>
  <div>
    <LoginForm/>
  </div>
</template>

<script>

import { LoginForm } from '~/static/dist/my-library.es.js'; // Import the shared component
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  components: {
    LoginForm
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>
