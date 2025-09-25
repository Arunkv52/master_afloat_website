module.exports = {
  theme: {
    extend: {
      textStrokeWidth: {
        2: '2px',
      },
      textStrokeColor: {
        cyan: '#06b6d4',
      },
    },
  },
  plugins: [
    require('tailwindcss-textstroke'),
  ],
}
