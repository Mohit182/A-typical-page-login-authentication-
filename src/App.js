import react, { useState } from "react";
import Login from "./Login/Login";
import MainHeader from "./MainHeader/MainHeader";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <h1>Welcome to the app!</h1>}
      </main>
    </div>
  );
};

export default App;
