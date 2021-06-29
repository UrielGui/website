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
        'header-background': "url('/img/background/bg-home.png')",
        'background-about': "url('/img/background/bg-sobre.png')",
        'picture-about': "url('/img/background/about-picture.png')",
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
      backgroundSize: {
        'header-size': '110%',
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
        },
        zoomBgAnimation: {
          '0%': { backgroundSize: '110%' },
          '100%': { backgroundSize: '100%' }
        }
      },
      animation: {
        wheelAnimation: 'wheelAnimation 2s infinite',
        helloAnimation: 'helloAnimation 3s infinite',
        zoomBgAnimation: 'zoomBgAnimation 12s infinite alternate',
      }
    }
  },
  variants: {},
  plugins: [
    plugin(function ({ addComponents }) {
      const container = {
        '.container': {
          margin: '0 2.5rem 0 2.5rem',
        },
      };
      addComponents(container);
    })
  ],
};