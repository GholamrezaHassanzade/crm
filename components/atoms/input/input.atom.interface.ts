// * components
import React from 'react';

export interface IInputAtom {
    disabled?: boolean;
    id?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    value?: string | number;
    variant?: 'outlined' | 'filled' | 'standard'; // Add variant property with allowed values
}
