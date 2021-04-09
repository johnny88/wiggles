import React from "react";
import cn from "classnames";

export enum Variant {
  Contained = "contained",
  Text = "text",
}

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
}

type ButtonProps = {
  onClick?: () => void;
  variant?: Variant;
  color?: Color;
  children?: JSX.Element | JSX.Element[] | string;
};

function createStyles(variant: Variant, color: Color) {
  if (color === Color.Primary)
    return [
      "ring-purple-500",
      {
        "bg-purple-500 text-white hover:bg-purple-600":
          variant === Variant.Contained,
        "text-purple-500 hover:text-purple-700": variant === Variant.Text,
      },
    ];
  return [
    "ring-gray-500",
    {
      "bg-gray-500 text-white hover:bg-gray-600": variant === Variant.Contained,
      "text-gray-500 hover:text-gray-600": variant === Variant.Text,
    },
  ];
}

export function Button({
  onClick,
  variant = Variant.Contained,
  color = Color.Primary,
  children,
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1 rounded focus:ring-2 ring-offset-1 outline-none transition-colors font-bold",
        createStyles(variant, color)
      )}
    >
      {children}
    </button>
  );
}
