module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "Helvetica"],
      serif: ["Pacifico", "ui-serif", "Georgia"],
    },
    extend: {
      height: {
        "100px": "100px",
        full: "100%",
        "600px": "600px",
        12: "3.5rem",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus", "active"],
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
