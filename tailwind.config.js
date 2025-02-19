
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    // fontSize: {
    //     clamp: "clamp(1rem, 5vw, 3rem)",
    //   },
    
    extend: {
      fontFamily:{
      'proxnov': 'ProximaNova, arial, "Helvetica Neue", sans-serif'
    },
   backgroundImage:{
      hoverImg: 'url("/src/assests/loca.png")'
    },
     colors: {
      'dark-gray': '#282C3F',
      'orange': '#FC8019',
      'white': "#fff",
      'light-gray': '#93959f',
      'e9':'#E9E9EB',
      'dark-city':'#686B78',
      'light-gray1': '#A9ABB2'

    },
    height: {
      '128': '32rem',
    },
    width: {
      '128': '32rem',
    },
    backgroundImage: {
      
      'input_bg': "url('./src/assests/bgInput.png')",
    },
    fontSize: {
      clamp: "clamp(1rem, 2vw, 3rem)",
    },
    screens: {
      minSm:'768',
      xs: {max:"480px"},
      ss: {max:"620px"},
      sm: {max:"768px"},
      md: {max:"1060px"},
      lg: {max:"1200px"},
      xl: {max:"1700px"},
      minsm: {min:"768px"}
    },
      
    },
  },
  
}