
import { Theme } from '@emotion/react'; // Import the Theme type from Emotion

declare module '@emotion/react' {
    export interface Theme {
        BLACK: string;
        WHITE: string;
    }
}


const BASE_COLORS: Theme = {
    // other theme properties...
    WHITE: '#ffffff',
    BLACK: '#000000',
};


export const THEME_LIGHT = {
    ...BASE_COLORS,

};