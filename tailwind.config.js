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
        'header': "url('/img/background/bg-home.png')",
        'about': "url('/img/background/bg-sobre.png')",
        'picture-about': "url('/img/background/about-picture.png')",
        'skills': "url('/img/background/bg-habilidades.png')",
        'contact': "url('/img/background/bg-contato.png')",
        'contact-2': "url('/img/background/bg-contato-2.png')",
      }),
      colors: {
        'uriel-blue-light': '#6CD7E8',
        'main-color': '#0C0719',
        'main-color-2': '#311e61',
        'degrade-color1': '#c824ac',
        'degrade-color2': '#1961f9',
        'degrade-color3': '#00d1d2',
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
      },
      height: {
        '32': '32rem',
      },
      width: {
        '3/7': '43%',
      },
      backgroundSize: {
        'header-size': '110%',
      },
      letterSpacing: {
        'subtitle': '0.4em',
      },
      keyframes: {
        wheelAnimation: {
          '0%': { opacity: '0', top: '2px' },
          '50%': { opacity: '1', top: '20px' },
          '100%': { opacity: '0', top: '33px' }
        },
        helloAnimation: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-20deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        fadeinMobileMenu: {
          'from': { opacity: '0', },
          'to': { opacity: '1', }
        },
        zoomBgAnimation: {
          '0%': { backgroundSize: '110%' },
          '100%': { backgroundSize: '100%' }
        },
        // Skils
        htmlProgressValue: {
          '0%': { width: '0' },
          '100%': { width: '98%' }
        },
        uiProgressValue: {
          '0%': { width: '0' },
          '100%': { width: '89%' }
        },
        jsProgressValue: {
          '0%': { width: '0' },
          '100%': { width: '74%' }
        },
        nodeProgressValue: {
          '0%': { width: '0' },
          '100%': { width: '45%' }
        },
        reactProgressValue: {
          '0%': { width: '0' },
          '100%': { width: '72%' }
        },
        nextProgressValue: {
          '0%': { width: '0' },
          '100%': { width: '70%' }
        },
        sassProgressValue: {
          '0%': { width: '0' },
          '100%': { width: '92%' }
        },
        apiProgressValue: {
          '0%': { width: '0' },
          '100%': { width: '32%' }
        },
        bootstrapProgressValue: {
          '0%': { width: '0' },
          '100%': { width: '94%' }
        },
        sqlProgressValue: {
          '0%': { width: '0' },
          '100%': { width: '36%' }
        }
      },
      animation: {
        wheelAnimation: 'wheelAnimation 2s infinite',
        helloAnimation: 'helloAnimation 3s infinite',
        fadeinMobileMenu: 'fadeinMobileMenu 1s',
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
        ':root': {
          backgroundColor: '#070218'
        },
        '*:focus': {
          outline: 'none'
        },

        '::-webkit-scrollbar': {
          width: '8px',
        },
        '::-webkit-scrollbar-track': {
          background: '#0c0719',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundImage: 'linear-gradient(#c824ac, #1961f9, #00d1d2)',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundImage: 'linear-gradient(#ad1895, #134ecc, #0cb3b3)',
        },

        '@font-face': {
          fontFamily: 'assinatura',
          src: 'url(/fonts/GreatVibes-Regular.ttf)',
        },
        '.signature': {
          fontFamily: 'assinatura',
        },

        '.ityped-cursor': {
          color: '#6CD7E8',
          animation: '1s blink step-end infinite'
        },

        '.Toastify__toast--success': {
          background: '#007965 !important',
          fontFamily: 'inherit !important',
          padding: '2px 10px !important',
          fontSize: '0.96rem'
        },

        '.mainContainer': {
          paddingRight: '2.5rem',
          paddingLeft: '2.5rem',
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
        },
        '.portfolio-active-menu': {
          background: '#065f46',
          borderRadius: '10px'
        },
        '.border-bottom-blue-light': {
          borderBottom: '3px solid #6cd7e8',
          width: '10em',
          paddingTop: '0.6rem',
        },
        '.border-bottom-white': {
          borderBottom: '3px solid #fff',
          width: '10em',
          paddingTop: '2rem',
        },
        '#navScroll': {
          transition: 'top 0.3s'
        },
      };
      addComponents(main);
    })
  ],
};