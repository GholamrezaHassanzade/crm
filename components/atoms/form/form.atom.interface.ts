import { ReactNode } from 'react';

export interface IFormAtom {
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    children?: ReactNode;
    width?: string;
    height?: string;
}

export interface IFormStyle {
    width?: string;
    height?: string;
}
