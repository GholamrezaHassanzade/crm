"use client"
// * import tools
import React, { FC } from "react";
import styled from "@emotion/styled";

// *
import { IFlex } from "@/components/atoms/flex/Flex.atom.interface";

const Flex = styled.div<IFlex>`
    display: flex;
    flex-direction: ${({ direction }) => direction || "row"};
    justify-content: ${({ justify }) => justify || "flex-start"};
    align-items: ${({ align }) => align || "stretch"};
    flex-wrap: ${({ wrap }) => wrap || "nowrap"};
    gap: ${({ gap }) => gap || "0"};
    width: ${({ width }) => width || "unset"};
    height: ${({ height }) => height || "unset"};
`;
export const FlexAtom: FC<IFlex> = ({ children, ...rest }) => {
    return <Flex {...rest}>{children}</Flex>;
};
