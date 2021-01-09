import Typography from "typography"
import variables from "../styles/utils/_variables.scss"

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
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    body: { color: variables.colorB100 },
    p: { fontSize: variables.fontSizeParagraph, lineHeight: 1.1 },
    h1: {
      fontSize: variables.fontSizeTitle,
    },
    h2: {
      fontSize: variables.fontSizeSubtitle,
    },
    "h3, h4, h5, h6": {
      fontSize: variables.fontSizeParagraph,
    },
    "ul, li": {
      margin: 0,
      listStyle: "none",
    },
    a: {
      textDecoration: "none",
      fontWeight: 700,
      color: variables.colorP100,
    },
  }),
})

if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
