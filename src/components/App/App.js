import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase/firebase';

import { default as Header } from '../Header/Header.container';
import Spinner from '../Spinner/Spinner';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('../../pages/ShopPage/ShopPage'));
const CheckoutPage = lazy(() =>
  import('../../pages/CheckoutPage/CheckoutPage.container')
);
const SignInAndSignUpPage = lazy(() =>
  import('../../pages/SignInAndSignUpPage/SignInAndSignUpPage')
);

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.get().then((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <BrowserRouter>
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
