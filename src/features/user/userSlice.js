import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { db } from "../../lib/firebase";

const initialState = {
  user: null,
  isLoading: true
};

export const fetchLoginUser = createAsyncThunk(
  "user/fetchLoginUser",
  async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  }
);

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
  }
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;