// * Import Tools
import { createTheme, Theme } from '@mui/material/styles';


// * Import Constants
import { THEME_LIGHT } from '@/constants/themes';


const { palette: { augmentColor } } = createTheme();

const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } })


export const MATERIAL_UI_THEME_LIGHT_CONFIG: Theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: 'Roboto',
        allVariants: {
            textAlign: "right"
        },
        button: {
            fontSize: '1rem',
        }

    },
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    fontFamily: "Roboto",
                    width: "100%",
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '6px',
                        height: '45px', // Adjust height here
                        '& fieldset': {
                            borderColor: '#ccc', // Default border color
                        },
                        '&:hover fieldset': {
                            borderColor: '#000', // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#3f51b5', // Border color when focused
                        },
                    },
                }
            }
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h2',
                    h2: 'h2',
                    h3: 'h2',
                    h4: 'h2',
                    h5: 'h2',
                    h6: 'h2',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'span',
                    body2: 'span',
                },
            },
        }
    }
})
