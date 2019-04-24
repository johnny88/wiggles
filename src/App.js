import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import { Fade } from '~/components/transitions';

import { Loading, BottomNavigation } from '~/components';
import { Login, ImageUpload, Feed } from '~/containers';

export default () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let callback = null;
    let metadataRef = null;

    const unsubscribe = window.firebase.auth().onAuthStateChanged(res => {
      if (callback) metadataRef.off('value', callback);

      if (res) {
        metadataRef = window.firebase
          .database()
          .ref('metadata/' + res.uid + '/refreshTime');
        callback = async snapshot => {
          res.getIdToken(true);
          const idToken = await window.firebase
            .auth()
            .currentUser.getIdTokenResult();
          setUser(idToken);
          setLoading(false);
        };
        metadataRef.on('value', callback);
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const signOut = () => {
    window.firebase.auth().signOut();
    setUser(null);
  };

  return (
    <div
      id="App"
      className="flex flex-col h-screen w-full items-center text-grey-darkest"
    >
      <Router>
        <div className="flex h-full w-full">
          <Fade in={loading} className="h-full">
            <div className="flex flex-col items-center flex-grow h-full w-full">
              <Loading />
            </div>
          </Fade>
        </div>
        <Fade in={!loading}>
          <>
            <PrivateRoute
              signOut={signOut}
              user={user}
              path="/camera"
              component={() => <ImageUpload user={user} />}
            />
            <PrivateRoute
              exact
              signOut={signOut}
              user={user}
              path="/"
              component={() => <Feed />}
            />
            <PrivateRoute
              signOut={signOut}
              user={user}
              path="/profile"
              component={() => (
                <div className="flex items-center justify-center h-full">
                  <button
                    className="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded"
                    onClick={() => signOut()}
                  >
                    Logout
                  </button>
                </div>
              )}
            />
            {user && <BottomNavigation />}
          </>
          <PublicRoute path="/login" component={() => <Login user={user} />} />
        </Fade>
      </Router>
    </div>
  );
};

const PublicRoute = withRouter(
  ({ location, component: Component, user, ...rest }) => (
    <Fade in={location.pathname === rest.path}>
      <Route {...rest} render={props => <Component {...props} />} />
    </Fade>
  )
);

const PrivateRoute = withRouter(
  ({ location, component: Component, user, signOut, ...rest }) => {
    if (user && user.claims && !user.claims.authorized) signOut();
    return (
      <Fade in={location.pathname === rest.path}>
        <Route
          {...rest}
          render={props =>
            user ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      </Fade>
    );
  }
);
