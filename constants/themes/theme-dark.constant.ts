import { Theme } from '@emotion/react'; // Import the Theme type from Emotion

declare module '@emotion/react' {
    export interface Theme {
        BLACK: string;
        WHITE: string;
        PRIMARY: string;
        SECONDARY: string;
        WARNING: string;
        ERROR: string;
        INFO: string;
        SUCCESS: string;
    }
}


const COLORS: Theme = {
    // other theme properties...
    WHITE: '#ffffff',
    BLACK: '#000000',
    PRIMARY: '#28287D',
    SECONDARY: '#141437',
    WARNING: '',
    ERROR: '#820014',
    INFO: '',
    SUCCESS: '',
};


export const THEME_DARK = {
    ...COLORS,

};