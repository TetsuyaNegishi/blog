import Typography from "typography"
import bootstrap from "typography-theme-bootstrap"

bootstrap.overrideThemeStyles = () => {
  return {
    "a": {
      color: 'blue',
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "code": {
      margin: '0 0.3rem'
    },
    "div.gatsby-highlight": {
      marginBottom: '1.5rem'
    }
  }
}

delete bootstrap.googleFonts

const typography = new Typography(bootstrap)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
