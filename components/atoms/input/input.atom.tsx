import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { IInputAtom } from "@/components/atoms/input/input.atom.interface";
import { TextField, TextFieldProps } from "@mui/material";

const Input = styled((props: TextFieldProps) => <TextField {...props} />)`
    width: 100%;
    height: 35px;
    border-radius: 3px;
    padding-right: 6px;
`;

export const InputAtom = forwardRef<HTMLInputElement, IInputAtom>(
    (
        {
            disabled = false,
            id,
            name,
            onChange,
            placeholder,
            type = "text",
            value,
            variant,
        },
        ref
    ) => {
        return (
            <Input
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                type={type}
                disabled={disabled}
                value={value}
                ref={ref}
                variant={variant}
            />
        );
    }
);
