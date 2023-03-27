/// <reference types="react" />
import "!postcss-loader!./Button.scss";
export interface ButtonProps {
    label?: string;
    color?: "orange" | "blue" | "green" | "red";
    size?: "small" | "medium" | "large";
    outline?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
declare const Button: ({ color, size, outline, label, ...props }: ButtonProps) => JSX.Element;
export default Button;
