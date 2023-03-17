import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  edit: null,
  status: '',
  sort: '',
  search: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    edit: (state, action) => {
      state.edit = action.payload;
    },
    status: (state, action) => {
      state.status = action.payload;
    },
    sort: (state, action) => {
      console.log(state.sort);
      console.log(action.payload);
      state.sort = action.payload;
    },
    search: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { edit, status, sort, search } = filterSlice.actions;
