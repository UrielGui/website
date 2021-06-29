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
        'skills': "url('/img/background/bg-habilidades.png')",
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
        },
        // Skils
        htmlProgressValue: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '98%'
          }
        },
        uiProgressValue: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '89%'
          }
        },
        jsProgressValue: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '74%'
          }
        },
        nodeProgressValue: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '40%'
          }
        },
        reactProgressValue: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '72%'
          }
        },
        nextProgressValue: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '70%'
          }
        },
        sassProgressValue: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '92%'
          }
        },
        apiProgressValue: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '32%'
          }
        },
        bootstrapProgressValue: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '94%'
          }
        },
        sqlProgressValue: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '36%'
          }
        }
      },
      animation: {
        wheelAnimation: 'wheelAnimation 2s infinite',
        helloAnimation: 'helloAnimation 3s infinite',
        zoomBgAnimation: 'zoomBgAnimation 12s infinite alternate',
        // Skills
        htmlProgressValue: 'htmlProgressValue 3s normal forwards',
        uiProgressValue: 'uiProgressValue 3s normal forwards',
        jsProgressValue: 'jsProgressValue 3s normal forwards',
        nodeProgressValue: 'nodeProgressValue 3s normal forwards',
        reactProgressValue: 'reactProgressValue 3s normal forwards',
        nextProgressValue: 'nextProgressValue 3s normal forwards',
        sassProgressValue: 'sassProgressValue 3s normal forwards',
        apiProgressValue: 'apiProgressValue 3s normal forwards',
        bootstrapProgressValue: 'bootstrapProgressValue 3s normal forwards',
        sqlProgressValue: 'sqlProgressValue 3s normal forwards',
      }
    }
  },
  variants: {},
  plugins: [
    plugin(function ({ addComponents }) {
      const main = {
        '.container': {
          margin: '0 2.5rem 0 2.5rem',
        },
        '.progress': {
          background: 'rgb(255, 255, 255)',
          justifyContent: 'flex-start',
          borderRadius: '100px',
          alignItems: 'center',
          position: 'relative',
          display: 'flex',
          height: '15px',
        },
        '.progress-value': {
          boxShadow: '0 10px 40px -10px rgb(255, 255, 255)',
          borderRadius: '100px',
          backgroundImage: 'linear-gradient(to right, #c824ac, #1961f9, #00d1d2)',
          height: '15px',
          width: '0'
        }
      };
      addComponents(main);
    })
  ],
};