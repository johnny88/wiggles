import React from "react";
import { LandingPage, Feed } from "@/pages";
import { useAuth } from "@/hooks";
import { Loading, Header } from "@/lib";

function App(): JSX.Element {
  const [user, loading] = useAuth();

  return (
    <>
      {loading && (
        <div className="flex w-full min-h-screen items-center justify-center">
          <Loading />
        </div>
      )}
      {!loading && !user && (
        <div className="flex flex-col min-h-screen">
          <Header />
          <LandingPage />
        </div>
      )}
      {user && (
        <>
          <Header loggedIn={true} />
          <Feed />
        </>
      )}
    </>
  );
}

export default App;
// <Header loggedIn={true}>
// <Feed />
// </Header>
