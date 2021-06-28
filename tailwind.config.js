const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './pages/**/*.jsx',
    './components/**/*.jsx',
    './pages/**/*.js',
  ],
  theme: {
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
        'degrade-color1': '#c824ac',
        'degrade-color2': '#1961f9',
        'degrade-color3': '#00d1d2',
      },
      zIndex: {
        '-1': '-1',
      },
      keyframes: {
        wheelAnimation: {
          '0%': { opacity: '0', top: '2px' },
          '50%': { opacity: '1', top: '50%' },
          '100%': { opacity: '0', top: '33px' }
        },
        helloAnimation: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-20deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        wheelAnimation: 'wheelAnimation 2s infinite',
        helloAnimation: 'helloAnimation 3s infinite',
      }
    }
  },
  variants: {},
  plugins: [
    plugin(function ({ addComponents }) {
      const container = {
        '.container': {
          padding: '0 2.5rem 0 2.5rem',
        },
      };

      addComponents(container);
    })
  ],
};