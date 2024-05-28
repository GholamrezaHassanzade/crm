// * Import tools
import React, { FC } from "react";
import styled from "@emotion/styled";

// * Import interface
import { ITypographyAtom } from "@/components/atoms/typography/typography.atom.interface";

// * import mui
import { Typography } from "@mui/material";

// Single Responsibility Principle (SRP)
const TypographyStyle = styled(Typography)<ITypographyAtom>`
    color: ${({ theme, color }) => (color ? color : theme.BLACK)};
    font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "16px")};
    font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : "500")};
    line-height: 1.5;
    text-align: left !important;
`;

// Open/Closed Principle (OCP)
export const TypographyAtom: FC<ITypographyAtom> = ({
    id,
    fontWeight,
    fontSize,
    children,
    color,
    variant,
    
}) => {
    // Dependency Inversion Principle (DIP) - Consider passing theme as a prop
    return (
        <TypographyStyle
            id={id}
            color={color}
            fontWeight={fontWeight}
            fontSize={fontSize}
            variant={variant}
        >
            {children}
        </TypographyStyle>
    );
};

// Interface Segregation Principle (ISP) - Consider splitting ITypography if needed
