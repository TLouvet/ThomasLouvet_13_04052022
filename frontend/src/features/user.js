import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 'void',
  error: null,
  data: null,
  isEditingName: false,
  isConnected: false,
}

const { actions, reducer } = createSlice({
  name: 'user',
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
        draft.status = 'updating';
        return;
      }
      return;
    },
    resolved: (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.status = "resolved";
        draft.data = { firstName: action.payload?.firstName, lastName: action.payload?.lastName };
        draft.error = null;
        draft.isConnected = true;
        draft.isEditingName = false;
        return;
      }
      return;
    },
    rejected: (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.status = "rejected";
        draft.error = action.payload;
        draft.data = null;
        draft.isEditingName = false;
        return;
      }
      return;
    },
    setConnectionState: (draft, action) => {
      draft.isConnected = action.payload;
    },
    toggleEdit: (draft) => {
      draft.isEditingName = !draft.isEditingName;
      return;
    },
    cancelUpdate: (draft) => {
      draft.isEditingName = false;
      return;
    },
    logout: (draft) => {
      draft.data = null;
      draft.status = 'void';
      draft.error = null;
      draft.isEditingName = false;
      draft.isConnected = false;
    }
  }
})

export const { fetching, resolved, rejected, toggleEdit, logout, setConnectionState, cancelUpdate } = actions;
export default reducer;