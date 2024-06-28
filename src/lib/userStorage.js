import { doc } from 'firebase/firestore'
import { create } from 'zustand'
import { db } from './firebase'
import { getDoc } from 'firebase/firestore'

export const useStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchCurrentUser: async (uid) => {
    if (!uid) return set({ currentUser: null, isLoading: false })

    try {
      const docRef = doc(db, "users", uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        set({ currentUser: { uid, ...docSnap.data() }, isLoading: false })
      } else {
        set({ currentUser: null, isLoading: false })
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}))