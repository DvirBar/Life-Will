import { createTheme } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#C85FCE'
        },
        secondary: {
            main: '#662A68'

        }
    },
    direction: "rtl"
})

theme = createTheme(theme, {
    typography: {
        fontFamily: [
            'NotoSansHebrew',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            color: theme.palette.primary.main,
            fontFamily: 'NotoSansHebrew',
            fontWeight: 400
        },
        h2: {
            // [theme.breakpoints.down("sm")]: {
            //     fontSize: "3.3rem"
            // },
            fontFamily: 'NotoSansHebrew',
            fontWeight: 500
        },
        body1: {
            fontWeight: 400,
            fontFamily: 'NotoSansHebrew',
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },
})

export default theme