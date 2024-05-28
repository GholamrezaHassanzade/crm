// * Import Interfaces
import { Variant } from '@mui/material/styles/createTypography';
import { ReactNode } from 'react';
import { OverridableStringUnion } from '@mui/types';
import { TypographyPropsVariantOverrides } from '@mui/material';

export interface ITypographyAtom {
    // * your interface
    id?: string;
    fontSize?: number | string;
    fontWeight?: number | string;
    children?: ReactNode;
    color?: string;
    variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>;
}
