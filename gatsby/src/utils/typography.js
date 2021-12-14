import Typography from "typography"

const typography = new Typography({
  baseFontSize: "10px",
  headerFontFamily: ["Rubik", "sans-serif"],
  bodyFontFamily: ["Karla", "sans-serif"],
  headerWeight: 700,
  googleFonts: [
    {
      name: "Rubik",
      styles: ["700", "400"],
    },
    {
      name: "Karla",
      styles: ["700", "400"],
    },
  ],
})

export default typography
