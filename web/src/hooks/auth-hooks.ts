import { useCallback, useRef } from "react";
import { firebaseApp } from "@/firebase-app";
import { getAuth, GoogleAuthProvider, getRedirectResult } from "firebase/auth";

const auth = getAuth(firebaseApp);
getRedirectResult(auth).then((result) => {
  // This gives you a Google Access Token. You can use it to access Google APIs.
  // const credential = GoogleAuthProvider.credentialFromResult(result);
  // const token = credential.accessToken;
  // The signed-in user info.
  // const user = result.user;
});
// .catch((error) => {
// Handle Errors here.
// const errorCode = error.code;
// const errorMessage = error.message;
// The email of the user's account used.
// const email = error.email;
// The AuthCredential type that was used.
// const credential = GoogleAuthProvider.credentialFromError(error);
// ...
// });

export function useAuth() {
  const login = useRef(async () => {
    const result = getRedirectResult(auth);
  });
}
