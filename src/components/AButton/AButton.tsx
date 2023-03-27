import React from "react";
// import "../../tailwind.scss";
import "./AButton.scss";

export interface AButtonProps {
  label?: string;
  color?: "orange" | "blue" | "green" | "red";
  size?: "small" | "medium" | "large";
  outline?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const AButton = ({
  color = "orange",
  size = "medium",
  outline = false,
  label,
  ...props
}: AButtonProps) => {
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

export default AButton;
