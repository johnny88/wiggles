import React from "react";

export function Loading(): JSX.Element {
  return (
    <div className="flex h-20 w-20 items-center justify-center">
      <span className="absolute inline-flex material-icons text-purple-400 text-6xl animate-ping">
        favorite
      </span>
      <span className="relative inline-flex material-icons text-purple-500 text-6xl">
        favorite
      </span>
    </div>
  );
}
