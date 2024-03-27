module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        1200: "1200px",
      },
      backgroundColor: {
        primary: "#ecf0f1",
        secondary: "#1266dd",
        secondary1: "#f6e58d",
      },
      maxWidth: {
        600: "600px",
      },
      cursor: {
        pointer: "pointer",
      },
    },
  },
  plugins: [],
};
