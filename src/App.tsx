import "./App.css";

import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import { useEffect } from "react";
import Login from "./login/Login";
import { useStore } from "./lib/userStorage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useChatStore } from "./lib/useChatStore";

function App() {
  const { currentUser, isLoading, fetchCurrentUser } = useStore();
  const { chatId } = useChatStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
      fetchCurrentUser(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchCurrentUser]);
  console.log(currentUser);

  if (isLoading)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId || <Chat />}
          {chatId || <Detail />}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
