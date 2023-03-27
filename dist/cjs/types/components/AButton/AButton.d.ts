/// <reference types="react" />
import "../../tailwind.scss";
import "./AButton.scss";
export interface AButtonProps {
    label?: string;
    color?: "orange" | "blue" | "green" | "red";
    size?: "small" | "medium" | "large";
    outline?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
declare const AButton: ({ color, size, outline, label, ...props }: AButtonProps) => JSX.Element;
export default AButton;
