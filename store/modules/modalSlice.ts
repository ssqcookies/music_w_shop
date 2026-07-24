import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  loginQRVisible: boolean;
}

const initialState: ModalState = {
  loginQRVisible: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openLoginQRModal: (state) => {
      state.loginQRVisible = true;
    },
    closeLoginQRModal: (state) => {
      state.loginQRVisible = false;
    },
  },
});

export const { openLoginQRModal, closeLoginQRModal } = modalSlice.actions;
export default modalSlice.reducer;