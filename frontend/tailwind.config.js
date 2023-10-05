/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        ph: { max: '639px' },
        lp: { 'max-height': '863px' },
      },
      scale: {
        40: '0.40',
        42: '0.42',
        45: '0.45',
        48: '0.48',
        55: '0.55',
        60: '0.60',
        65: '0.65',
        95: '0.95',
        90: '0.90',
        50: '0.50',
        75: '0.75',
      },
    },
  },
};
