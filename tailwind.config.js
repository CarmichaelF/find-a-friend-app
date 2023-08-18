/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.tsx']
export const theme = {
  extend: {
    colors: {
      opal: { DEFAULT: '#F15156', 400: '#F75F64', 500: '#E44449' },
      ateneo: '#0D3B66',
      naples: '#F4D35E',
      grey: '#FBE1E2',
    },
    padding: {
      30: '7.5rem',
      31: '7.75rem',
    },
    fontFamily: {
      sans: ['var(--font-nunito)'],
    },
    height: {
      input: '72px',
    },
    width: {
      input: '80px',
    },
    minWidth: {
      70: '17.5rem',
    },
    gridTemplateColumns: {
      'search-results': 'minmax(400px, 600px) 1fr',
    },
    maxWidth: {
      container: '1420px',
    },
    borderRadius: {
      input: '20px',
    },
  },
}
export const plugins = []
