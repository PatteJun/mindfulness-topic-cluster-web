/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          heading: '#323E47',
          body: '#62696F',
          terracotta: '#B15535',
          gold: '#CCA778',
          beige: '#FAF6F3',
          dark: '#323E47'
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 72px
        'h2': ['3rem', { lineHeight: '1.2' }], // 48px
        'h3': ['1.5rem', { lineHeight: '1.3' }], // 24px
        'body': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'small': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'button': ['0.9375rem', { lineHeight: '1', letterSpacing: '0.05em' }], // 15px
      },
      maxWidth: {
        'container': '1300px',
      },
      padding: {
        'section': '148px',
        'section-mobile': '70px',
      },
      borderRadius: {
        'button': '24px',
        'card': '32px',
        'card-mobile': '18px',
        'image': '42px',
        'image-sm': '32px',
      },
      screens: {
        'tablet': '992px',
        'desktop': '1200px',
      },
    },
  },
  plugins: [],
}