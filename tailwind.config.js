/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'darkorange': '#D87D4A',
      'lightorange': '#fbaf85',
      'black1': '#101010',
      'white': '#FFFFFF',
      'greywhite': '#F1F1F1',
      'black2': '#000000',
      'lightgreywhite': '#FAFAFA',
      'bordergrey': '#979797',
      'hoverblack': '#4C4C4C',
    },
    extend: {
      backgroundImage: {
        'mobile-orangecircle': "url('./Img/circle-bg.png')",
        'mobile-speaker': "url('./Img/speaker-bg.png')",
        'tablet-speaker': "url('./Img/tabletspeaker-bg.png')",
        'tablet-orangecircle': "url('./Img/tabletorangecirclebg.png')",
      }
    },
  },
  plugins: [],
}

