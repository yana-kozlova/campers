import { createTheme } from '@mui/material/styles';
import { eColors } from '../utils/eColors';

const theme = createTheme({
    palette: {
        primary: {
            main: eColors.PRIMARY,
        },
        secondary: {
            main: eColors.SECONDARY,
        },
        background: {
            default: eColors.WHITE,
        },
        text: {
            primary: eColors.PRIMARY_TEXT,
        },
        error: {
            main: eColors.PRIMARY_LIGHT,
        },
        success: {
            main: '#28a745',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        h1: {
            fontSize: '48px',
            fontWeight: 600,
        },
        h2: {
            fontSize: '24px',
            fontWeight: 600,
        },
        h3: {
            fontSize: '20px',
            fontWeight: 600,
        },
        body1: {
            fontSize: '16px',
            fontWeight: 400,
        },
        body2: {
            fontSize: '16px',
            fontWeight: 500,
        },
    },
    spacing: 8,
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: eColors.SILVER_LIGHT,
                },
            },
        },
    },
});

export default theme;
