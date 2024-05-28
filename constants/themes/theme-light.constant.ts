
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
    PRIMARY: '#1c8df8',
    SECONDARY: '#00C8FD',
    WARNING: '#FF775C',
    ERROR: '#820014',
    INFO: '#F9F871',
    SUCCESS: '#26EDB7',
};


export const THEME_LIGHT = {
    ...COLORS,

};