import React from "react";
import { HeartIcon } from "@heroicons/react/solid";

export function Loading(): JSX.Element {
  return (
    <div className="relative">
      <HeartIcon className="h-20 w-20 absolute inline-flex text-6xl text-purple-400 animate-ping" />
      <HeartIcon className="h-20 w-20 relative inline-flex text-6xl text-purple-500" />
    </div>
  );
}
