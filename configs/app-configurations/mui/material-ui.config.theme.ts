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
        allVariants:{
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
                }
            }
        },
    }
})
