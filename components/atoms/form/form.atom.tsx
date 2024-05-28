"use client";
// * Import Tools
import { FC } from "react";
import styled from "@emotion/styled";

// * Import interface
import {
    IFormAtom,
    IFormStyle,
} from "@/components/atoms/form/form.atom.interface";

const FormStyle = styled.form<IFormStyle>`
    background: ${({ theme }) => theme?.WHITE};
    border-radius: 6px;
    padding: 16px;
    width: ${({ width }) => width || "unset"};
    height: ${({ height }) => height || "unset"};
`;

export const FormAtom: FC<IFormAtom> = ({ onSubmit, children, ...rest }) => {
    return (
        <FormStyle onSubmit={onSubmit} {...rest}>
            {children}
        </FormStyle>
    );
};
