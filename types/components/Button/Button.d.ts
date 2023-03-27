/// <reference types="react" />
import "../../tailwind.scss";
import "./Button.scss";
export interface ButtonProps {
    label: string;
    onClick?: () => void;
}
declare const Button: ({ label, ...props }: ButtonProps) => JSX.Element;
export default Button;
