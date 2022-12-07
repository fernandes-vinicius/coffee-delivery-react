const sizes = {
  sm: '40rem',
  md: '48rem',
  lg: '64rem',
  xl: '80rem',
  xxl: '96rem',
}

export const defaultTheme = {
  sizes,

  screens: {
    sm: `(min-width: ${sizes.sm})`,
    md: `(min-width: ${sizes.md})`,
    lg: `(min-width: ${sizes.lg})`,
    xl: `(min-width: ${sizes.xl})`,
    xxl: `(min-width: ${sizes.xxl})`,
  },

  colors: {
    /** Base */

    white: '#FFFFFF',
    background: '#FAFAFA',
    card: '#F3F2F2',
    input: '#EDEDED',
    button: '#E6E5E5',
    hover: '#D7D5D5',
    label: '#8D8686',
    text: '#574F4D',
    subtitle: '#403937',
    title: '#272221',

    /** Brand */

    purple: '#8047F8',
    'purple-dark': '#4B2995',
    'purple-light': '#EBE5F9',

    yellow: '#DBAC2C',
    'yellow-light': '#F1E9C9',
    'yellow-dark': '#C47F17',
  },

  fontFamily: {
    header: `'Baloo 2', sans-serif`,
    text: `'Roboto', sans-serif`,
  },
}
