import React from "react";

type ButtonProps = {
  onClick?: () => void;
  children?: JSX.Element | JSX.Element[] | string;
};

export function Button({ onClick, children }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
    >
      {children}
    </button>
  );
}
