/// <reference types="react" />
interface AButtonProps {
    label?: string;
    color?: "orange" | "blue" | "green" | "red";
    size?: "small" | "medium" | "large";
    outline?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
declare const AButton: ({ color, size, outline, label, ...props }: AButtonProps) => JSX.Element;

export { AButton };
