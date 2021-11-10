import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { deepOrange, grey } from '@mui/material/colors';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        // primary: deepOrange,
        // divider: deepOrange[700],
        // background: {
        //     default: deepOrange[900],
        //     paper: deepOrange[900],
        // },
        // text: {
        //     primary: '#fff',
        //     secondary: grey[500],
        // },
    },
});

export default function DarkThemeProvider({ children }) {

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}