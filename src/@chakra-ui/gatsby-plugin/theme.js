// theme.js
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

// This is the default breakpoint
const breakpoints = createBreakpoints({
  xsm: "22em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

const theme = {
  fonts: {
    heading: `"Merriweather", ui-sans-serif, Cambria, "Times New Roman", Times, sans-serif`,
    body: `"Open Sans", ui-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `"Source Code Pro", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },
  fontSizes: {
    xs: `0.65rem`, // ~ 10px
    sm: `0.875rem`, // 14px
    md: `1rem`,
    lg: `1.125rem`,
    xl: `1.3rem`,
    "2xl": `1.6rem`,
    "3xl": `1.9rem`,
    "4xl": `2.5rem`,
    "5xl": `3rem`,
  },
  lineHeights: {
    normal: `1.5`,
  },

  colors: {
    brand: {
      azure: {
        light: "#2693ff",
        medium: "#027fff",
        dark: "#0074e9",
      },
      blue: {
        light: "#1c9de7",
        medium: "#0e90db",
        dark: "#1489cc",
      },
      indigo: {
        light: "#7242f8",
        medium: "#622aff",
        dark: "#5523dd",
      },
      pink: {
        light: "#f34f63",
        medium: "#e94256",
        dark: "#d33a4b",
      },
      green: {
        light: "#0ca747",
        medium: "#0b9e43",
        dark: "#0a8d3c",
      },
    }
  },
  breakpoints: {
    ...breakpoints,
  },
  components: {
    Text: {
      baseStyle: {
        margin: `0.85em 0`,
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 900,
        margin: `0.40em 0 0.65em 0`,
      },
      sizes: {
        "4xl": {
          fontSize: ["2xl", "3xl", "4xl", "5xl"],
          lineHeight: `normal`,

        },
        "3xl": {
          fontSize: ["xl", "2xl", "3xl", "4xl"],
          lineHeight: `normal`,

        },
        "2xl": {
          fontSize: ["lg", "xl", "2xl", "3xl"],
          lineHeight: `normal`,
        },
        xl: {
          fontSize: `xl`,
          lineHeight: `normal`,
        },
        lg: {
          fontSize: `lg`,
          lineHeight: `normal`,
        },
        md: {
          fontSize: `md`,
          lineHeight: `normal`,
        },
        sm: {
          fontSize: `sm`,
          lineHeight: `normal`,
        },
      }
    }
  }
}

// export default extendTheme(theme)