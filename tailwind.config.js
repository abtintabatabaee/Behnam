/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
          brandon: ['"BrandonGrotesque-Regular"', 'sans-serif'],
      brandonBold: ['"BrandonGrotesque-Bold"', 'sans-serif'],
      brandonLight: ['"BrandonGrotesque-Light"', 'sans-serif'],
      brandonItalic:[ "BrandonGrotesque-LightItalic",'sans-serif'],
      brandonBoldItalic:[ "BrandonGrotesque-BoldItalic",'sans-serif']
    },

     backgroundImage: {
        dynamic: "var(--bg-image)",
      },

    },
  },
  plugins: [],
}

