module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#308d62',
        darkColor: '#1f2937',
      },
      lineHeight: {
        xl: "70px",
        lg: "50px",
      },
      zIndex: {
        "-10": "-10",
      },
      backgroundImage: {
        complaint: "url('assets/Img/complaintImage.svg')",
        chat: "url('assets/Img/chatImage.svg')",
      },
      animation: {
        spin: "spin 15s linear infinite",
      },
      gridTemplateRows: {
        "chat-layout": "50px 400px 50px",
      },
      fontSize: {
        '4-5xl': '2.5rem',
        '11xl': '260px',


      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
