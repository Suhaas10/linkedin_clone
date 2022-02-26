import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import "./App.css";
import Header from "./components/Header/Header";
import Leftbar from "./components/Leftbar/Leftbar";
import Feed from "./components/Feed/Feed";
import Login from "./components/Login";
import { auth } from "./components/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Leftbar />
          <Feed />
          {/*rightbar*/}
        </div>
      )}

      {/*App body*/}
    </div>
  );
}

export default App;
