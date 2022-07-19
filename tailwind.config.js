/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      maxWidth: {
        'container': '1250px'
      },
      backgroundImage: {
        'bg-gradient': 'linear-gradient(90deg, #fff, #fff 55%, #f5f5f7 0, #f5f5f7)'
      },
      screens: {
        'desktop': {'max': '1440px'},
        'laptop': {'max': '1100px'},
        'tablet':  {'max': '900px'},
        'tablet-min': {'max': '700px'},
        'mobile': {'max': '550px'}
      },
    },
  },
  plugins: [],
}
