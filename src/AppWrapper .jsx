import React from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useThemeContext } from './ThemeContext';

const AppWrapper = ({ children }) => {
    const { darkMode } = useThemeContext();  // Use dark mode state from context

    // Define light and dark themes
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#fbbf24',
            },
        },
        typography: {
            h1: {
                fontSize: '2rem',
            },
            h2: {
                fontSize: '1.8rem',
            },
        },
    });

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />  {/* This ensures the theme is applied globally */}
            {children}
        </MuiThemeProvider>
    );
};

export default AppWrapper;
