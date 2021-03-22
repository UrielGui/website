module.exports = {
  purge: [
    './pages/**/*.jsx',
    './components/**/*.jsx',
    './pages/**/*.js',
  ],
  theme: {
    keyframes: {
      pulse: {
        '10%, 90%': { opacity: '8' },
        '10%': { opacity: .9 },
      },
    },
    inset: {
      '1/12': '25%',
    },
    extend: {
      backgroundImage: theme => ({
        ...theme('colors'),
        'home-background': "url('/img/background/bg-home.png')",
        'sobre-background': "url('/img/background/bg-sobre.png')",
        'sobre-foto': "url('/img/background/sobre-foto.png')",
        'habilidades-background': "url('/img/background/bg-habilidades.png')",
        'contato-2-background': "url('/img/background/bg-contato-2.png')",
        'contato-background': "url('/img/background/bg-contato.png')",
      }),
      colors: {
        'uriel-blue-light': '#6CD7E8',
        'main-color': '#0C0719',
        'main-color-2': '#261F39',
      },
    }
  },
  variants: {},
  plugins: [],
}