
import { Theme } from '@emotion/react'; // Import the Theme type from Emotion

declare module '@emotion/react' {
    export interface Theme {
        BLACK: string;
        WHITE: string;
    }
}


const BASE_COLORS: Theme = {
    // other theme properties...
    WHITE: '#000000',
    BLACK: '#ffffff',
};


export const THEME_DARK = {
    ...BASE_COLORS,

};