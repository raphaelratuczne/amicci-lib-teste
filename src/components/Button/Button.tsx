import React from "react";
// import "../../tailwind.scss";
// import "!style-loader!css-loader!postcss-loader!./Button.scss";
import "!postcss-loader!./Button.scss";
// import "./Button.scss";

export interface ButtonProps {
  label?: string;
  color?: "orange" | "blue" | "green" | "red";
  size?: "small" | "medium" | "large";
  outline?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  color = "orange",
  size = "medium",
  outline = false,
  label,
  ...props
}: ButtonProps) => {
  const classes = [
    "AButton",
    `color-${color}`,
    `size-${size}`,
    outline ? "outline" : "",
  ].join(" ");
  return (
    <button type="button" className={classes} {...props}>
      {label}
    </button>
  );
};

export default Button;
