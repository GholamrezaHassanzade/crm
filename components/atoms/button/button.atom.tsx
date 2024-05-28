// * import tools
import { FC } from "react";

import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { IButton } from "@/components/atoms/button/button.atom.interface";

const ButtonStyle = styled(Button)<IButton>``;
export const ButtonAtom: FC<IButton> = ({
    children,
    onClick,
    disabled,
    type,
    variant,
    ...rest
}) => {
    return (
        <ButtonStyle
            onClick={onClick}
            variant={variant}
            type={type}
            disabled={disabled}
            {...rest}
        >
            {children}
        </ButtonStyle>
    );
};
