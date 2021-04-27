import React from "react";
import { useSignOut } from "@/hooks";
import { DarkModeButton } from "@/lib";

type HeaderProps = {
  loggedIn?: boolean;
};
export function Header({ loggedIn = false }: HeaderProps) {
  const signOut = useSignOut();
  return (
    <div className="sticky top-0 flex w-full justify-end px-3 py-2 space-x-4 bg-gray-100 dark:bg-gray-900 shadow-md">
      {loggedIn && <button onClick={signOut}>Sign Out</button>}
      <DarkModeButton />
    </div>
  );
}
