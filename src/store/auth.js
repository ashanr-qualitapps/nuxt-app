export const state = () => ({
  user: null,
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  CLEAR_USER(state) {
    state.user = null;
  },
};

export const actions = {
  async login({ commit }, { username, password }) {
    try {
      // Replace this with your actual login API call
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const user = await response.json();

      // Save user data to Vuex store
      commit('SET_USER', user);

      // Redirect to home page or any other page after login
      this.$router.push('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  },
  logout({ commit }) {
    commit('CLEAR_USER');
    this.$router.push('/login');
  },
};

export const getters = {
  isAuthenticated(state) {
    return !!state.user;
  },
  getUser(state) {
    return state.user;
  },
};
