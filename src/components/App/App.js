import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase/firebase';

import { default as Header } from '../Header/Header.container';
import HomePage from '../../pages/HomePage/HomePage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import { default as CheckoutPage } from '../../pages/CheckoutPage/CheckoutPage.container';
import SignInAndSignUpPage from '../../pages/SignInAndSignUpPage/SignInAndSignUpPage';

import './App.css';

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
        <Header />
        <Switch>
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
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
