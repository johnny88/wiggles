import React from "react";
import { Button, Variant, Logo, Color } from "@/lib";
import googleIcon from "@/lib/google-icon.svg";

type LandingPageProps = { error?: string; login: () => void };

export function LandingPage({ error, login }: LandingPageProps): JSX.Element {
  return (
    <div className="bg-gray-100 w-full h-screen flex items-center justify-center">
      <div className="flex flex-col border-2 border-purple-100 bg-white min-h-[9rem] max-w-xs w-full px-6 py-10 text-center">
        <div className="px-8 min-h-[4rem] pb-6">
          <Logo />
        </div>
        {error !== undefined && (
          <div className="pt-2 pb-4">
            <div className="bg-red-200 px-3 py-2 rounded flex items-center text-red-900 border-l-2 border-red-700">
              <div className="material-icons pr-2 text-xl">error</div>
              <div>{error}</div>
            </div>
          </div>
        )}
        <div className="flex-1" />
        <div className="flex justify-center">
          <Button
            variant={Variant.Text}
            color={Color.Secondary}
            onClick={login}
          >
            <div className="flex items-center">
              <div className="pr-2">
                <img className="h-4 w-4" src={googleIcon} alt="Google Logo" />
              </div>
              <div>Log In With Google</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
