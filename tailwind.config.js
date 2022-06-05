module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "afrolingo-bg": "url('/images/afrolingo-african.png')",
        "afrolingo-bg-2": "url('/images/afro2.png')",
      },
      
      colors: {
        primary: {
          100: "#D2B278",
        },
        secondary: {
          100: "#D56C33"
        },
        tertiary: {
          100: "#003348"
        },
        quaternary: {
          100: "#77925F"
        },

        sub_color: {
          100: "#EDEDED",
        }
      }, 
      // font-family
      fontFamily: {
        basefont : ['Varela Round', 'sans-serif'],
        afrolingo : ['Oleo Script', 'cursive'],
      },

      // background - images
    },
  },
  plugins: [],
}
