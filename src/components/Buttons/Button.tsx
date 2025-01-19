import React from "react";
import { Button as MuiButton } from "@mui/material";
import { eColors } from "../../utils/eColors.ts";

interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onClick: () => (e: React.FormEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
}) => {
  const buttonStyles = {
    backgroundColor: variant === "primary" ? eColors.PRIMARY : eColors.WHITE,
    color: variant === "primary" ? eColors.WHITE : eColors.PRIMARY_TEXT,
    padding: "16px",
    border: variant === "primary" ? "none" : `1px solid ${eColors.GRAY_LIGHT}`,
    borderRadius: "200px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 500,
    textTransform: "none",
    minWidth: variant === "primary" ? "166px" : "145px",
    "&:hover": {
      border:
        variant === "primary" ? "none" : `1px solid ${eColors.PRIMARY_LIGHT}`,
      backgroundColor:
        variant === "primary" ? eColors.PRIMARY_LIGHT : eColors.WHITE,
    },
  };

  return (
    <MuiButton sx={buttonStyles} onClick={onClick}>
      {children}
    </MuiButton>
  );
};
