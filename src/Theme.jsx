import { createTheme } from "@mui/material";


let theme = createTheme({
    palette: {
        // background: {
        //     default: '#662A6810'
        // },
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
            fontFamily: 'NotoSansHebrew',
            fontWeight: 400
        },
        h2: {
            fontFamily: 'NotoSansHebrew',
            fontSize: "1.4rem",
            fontWeight: 500
        },
        subtitle1: {
            fontFamily: 'NotoSansHebrew',
            fontWeight: 600
        },
        body1: {
            fontFamily: 'NotoSansHebrew',
            fontWeight: 400,
        },
        body2: {
            fontFamily: 'NotoSansHebrew',
            fontWeight: 400,
            fontSize: "0.85rem"
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