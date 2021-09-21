import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login/Login';
import Spinner from 'react-spinkit';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="appLoading">
        <div className="appLoadingContent">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLS2OOXtmIHu0Tf1TmWITVrHNktn-MVXK3XRjwf4YA=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            className="loadingLogo"
          />

          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) :
          (
            <>
              <Header />
              <div className="appBody">
                <Sidebar />
                <Switch>
                  <Route path="/" exact>
                    <Chat />
                  </Route>
                </Switch>
              </div>
            </>
          )}
      </Router>
    </div>
  )
}

export default App;
