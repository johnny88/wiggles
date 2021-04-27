import React from "react";
import { useGoogleLogin, useAuth } from "@/hooks";
import { Logo, GoogleIcon } from "@/lib";
import { XCircleIcon } from "@heroicons/react/solid";

export function LandingPage(): JSX.Element {
  const [login] = useGoogleLogin();
  const [_user, _loading, error] = useAuth();
  return (
    <div className="flex flex-col h-full w-full justify-center flex-1 px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
      <div className="flex flex-col space-y-6 bg-white dark:bg-gray-700 p-4 lg:p-8 py-10 pb-16 rounded-xl w-full max-w-sm mx-auto border-4 border-gray-200 border-gray-400">
        <div className="flex flex-col items-center">
          <div className="h-28 w-28 dark:bg-white p-1 rounded-full flex items-center justify-center">
            <Logo />
          </div>
          <h2 className="mt-6 text-3xl font-display">
            Sign in to your account
          </h2>
        </div>
        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <XCircleIcon
                  className="h-5 w-5 text-red-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  {error.message}
                </h3>
              </div>
            </div>
          </div>
        )}
        <div>
          <div>
            <p className="text-sm font-medium">Sign in with</p>

            <div className="mt-1">
              <div>
                <a
                  onClick={() => {
                    login();
                  }}
                  href="#"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-white bg-purple-300 dark:bg-purple-700 border border-gray-300 rounded-md shadow-sm dark:hover:bg-purple-600 hover:bg-purple-400"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <GoogleIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
