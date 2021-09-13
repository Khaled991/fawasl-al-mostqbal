module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        darkColor: '#1f2937',
=======
        primary: "#308d62",
>>>>>>> 7b3aa969b87a2e28d9218366b7907ad25e9584a5
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
