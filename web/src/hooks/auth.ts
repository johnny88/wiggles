import { useState, useEffect, useCallback } from "react";
import { getApp } from "firebase/app";
import {
  getAuth,
  User,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const app = getApp();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export function useGoogleLogin() {
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string | undefined>();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const loginFunc = useCallback(() => {
    setLoading(true);
    signInWithRedirect(auth, provider)
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return [loginFunc, loggedIn, loading, error] as const;
}

export function useAuth() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(
      auth,
      (value) => {
        setLoading(false);
        if (value === null) return setUser(undefined);
        setUser(value);
      },
      (err) => {
        setLoading(false);
        setError(err);
      }
    );
    return unsubscribe;
  }, []);

  return [user, loading, error] as const;
}

export function useSignOut() {
  const signOutFunc = useCallback(() => {
    signOut(auth);
  }, []);
  return signOutFunc;
}
