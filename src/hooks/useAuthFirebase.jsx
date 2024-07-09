import { useEffect, useState } from "react"
import { auth } from "../lib/firebase"

const useAuthFirebase = () => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
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