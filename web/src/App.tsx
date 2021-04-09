import React from "react";
import { firebaseApp } from "@/firebase-app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import firebase from "firebase/app";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Button, Variant } from "@/lib";
// import { LandingPage } from "@/pages";

// function useAuth() {
// const [user, loading, error] = useAuthState(firebase.auth());
// const [loggingIn, setLoggingIn] = useState(false);

// const login = useRef(() => {
// setLoggingIn(true);
// const provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithRedirect(provider);
// });

// const logout = useRef(() => {
// firebase.auth().signOut();
// });

// return {
// user,
// loading: loading || loggingIn,
// error,
// login: login.current,
// logout: logout.current,
// };
// }

// function App(): JSX.Element {
// const { loading, error, logout, login, user } = useAuth();

// function Router(): JSX.Element {
// return (
// <div>
// <Button variant={Variant.Text} onClick={logout}>
// Log Out
// </Button>
// </div>
// );
// }

// if (loading)
// return (
// <div className="flex items-center justify-center h-screen w-full">
// <Loading />
// </div>
// );
// if (user) return <Router />;
// if (error) return <LandingPage error={error.message} login={login} />;
// return <LandingPage login={login} />;
// }

function App(): JSX.Element {
  return (
    <div>
      <Button variant={Variant.Text}>Login</Button>
    </div>
  );
}

export default App;
