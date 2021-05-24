module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      backgroundImage: theme => ({
       'hero': "url('../img/banner.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
