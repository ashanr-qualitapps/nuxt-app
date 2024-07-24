module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.vue',
    './src/components/**/*.vue',
    './src/layouts/**/*.vue',
    './src/plugins/**/*.js',
    './nuxt.config.ts',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
