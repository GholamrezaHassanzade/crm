// * Import toold
import { ReactNode } from "react";

// Interface for all props accepted by the AllPropsButton component
export interface IButton {
    // Button text content
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    variant: "text" | "outlined" | "contained";
    fullWidth?: boolean; // Add fullWidth property
}
