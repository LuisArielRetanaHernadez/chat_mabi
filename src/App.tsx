import "./App.css";

import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import { useState } from "react";
import Login from "./login/Login";

function App() {
  const [isLogin, setisLogin] = useState(false);
  return (
    <div className="container">
      {isLogin ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
