module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      darkBlue: '#023047',
      blue: '#219EBC',
      lightBlue: '#8ECAE6',
      yellow: '#FFB703',
      orange: '#FB8500',
      white: '#FFFFFF',
      text: '#416475'
    },
    boxShadow: {
      darkBlue: '3px 5px 5px 0px rgba(2,48,71, 0.4)',
      orange: '3px 5px 5px 0px rgba(251,133,0, 0.4)',
      blue: '3px 5px 5px 0px rgba(33,158,188,0.4)',
      yellow: '3px 5px 5px 0px rgba(255,183,3, 0.4)',
      lightBlue: '3px 5px 5px 0px rgba(142, 202, 230, 0.4)',
    },
    fontSize: {
      '7xl': '6.25rem',
      '3xl': '2.5rem',
      '2xl': '1.5rem',
      'lg': '2rem',
      '4xl': '3rem',
      'xl': '1.25rem',
      'md': '1rem',

    },
    backgroundImage: {
      'hero-lg': 'url(build/assets/headerBackground.png)',
      'hero-sm': 'url(build/assets/mobile_header_background.png)'
    },
    height: {
      'sm': '85vh',
      'lg': '100vh',
    },
    backgroundOpacity: {
      '25': '0.25',
    },
    fill: {
      darkBlue: '#023047',
      blue: '#219EBC',
      lightBlue: '#8ECAE6',
      yellow: '#FFB703',
      orange: '#FB8500',
      white: '#FFFFFF',
    },
    borderColor: {
      'lightBlue': '#8ECAE6',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
