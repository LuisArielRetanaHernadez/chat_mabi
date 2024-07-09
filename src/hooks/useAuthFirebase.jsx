import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

const useAuthFirebase = () => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  return authUser
}

export default useAuthFirebase