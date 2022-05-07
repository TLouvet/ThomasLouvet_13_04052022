import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "void",
  error: null,
}

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetching: (draft) => {
      if (draft.status === 'void') {
        draft.status = 'pending';
        return;
      }
      if (draft.status === 'rejected') {
        draft.status = 'pending';
        draft.error = null;
        return;
      }
      if (draft.status === 'resolved') {
        draft.status = 'pending';
      }
      return;
    },
    resolved: (draft) => {
      if (draft.status === "pending") {
        draft.status = "resolved";
        draft.error = null;
        return;
      }
    },
    rejected: (draft, action) => {
      if (draft.status === "pending") {
        draft.status = "rejected";
        draft.error = action.payload;
        return;
      }
    }
  }
})

export const { fetching, rejected, resolved } = actions;
export default reducer;