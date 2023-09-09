/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.tsx']
export const theme = {
  extend: {
    colors: {
      opal: {
        DEFAULT: '#F15156',
        400: '#F75F64',
        500: '#E44449',
        100: '#FBE1E2',
      },
      ateneo: { 400: '#114A80', DEFAULT: '#0D3B66' },
      naples: '#F4D35E',
      grey: '#F5F8FA',
      'light-grey': '#D3E2E5',
      'dark-grey': '#8FA7B2',
      green: '#3CDC8C',
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
      'pet-form': '700px',
      container: '1420px',
    },
    maxHeight: {
      'register-pet-form': '90vh',
    },
    borderRadius: {
      default: '20px',
    },
  },
}
export const plugins = []
