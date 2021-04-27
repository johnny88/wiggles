import React from "react";
import logoSrc from "./logo.png";

export function Logo({ className = "" }: { className?: string }): JSX.Element {
  return <img src={logoSrc} alt="logo" className={className} />;
}
