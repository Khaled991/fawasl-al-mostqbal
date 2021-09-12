module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#308d62",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
