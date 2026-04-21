import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#2D5016',
          'primary-hover': '#1E3A0E',
          accent: '#E8762B',
          'accent-hover': '#D4641A',
          background: '#FEFDF8',
          'background-alt': '#F5F0E8',
          'text-primary': '#1C1C1C',
          'text-secondary': '#4A4A4A',
          'text-muted': '#8A8A8A',
          border: '#E0D9CC',
          surface: '#FFFFFF',
          'dark-bg': '#1C2E10',
        },
      },
      fontSize: {
        'display': ['46px', { lineHeight: '1.1', fontWeight: '400' }],
        'h2': ['34px', { lineHeight: '1.2', fontWeight: '400' }],
        'h3': ['22px', { lineHeight: '1.3', fontWeight: '400' }],
        'body': ['17px', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
}

export default config
