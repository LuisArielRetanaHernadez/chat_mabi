import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, setDoc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { auth, db } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const initialState = {
  user: null,
  isLoading: true
};

export const fetchLoginUser = createAsyncThunk(
  "user/fetchLoginUser",
  async (data, thunkAPI) => {
    try {
      const res = await signInWithEmailAndPassword(auth, data.email, data.password)

      const docRef = doc(db, "users", res.user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }

  }
);

export const fetchRegisterUser = createAsyncThunk(
  "user/fetchRegisterUser",
  async (data, thunkAPI) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password)

      await addDoc(collection(db, "users"), {
        data
      })
      await setDoc(doc(db, 'userChats', res.user.uid), {
        chats: []
      })
      return {
        data
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const fetchLogoutUser = createAsyncThunk(
  "user/fetchLogoutUser",
  async (data, thunkAPI) => {
    try {
      auth.signOut();
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoginUser.pending, state => {
      state.isLoading = true;
    })
    builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    })
    builder.addCase(fetchLoginUser.rejected, state => {
      state.isLoading = false;
    })
    builder.addCase(fetchLogoutUser.pending, state => {
      state.isLoading = true;
    })
    builder.addCase(fetchLogoutUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    })
    builder.addCase(fetchLogoutUser.rejected, state => {
      state.isLoading = false;
    })
  }
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;