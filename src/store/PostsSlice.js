import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    selectedPost: null,
  },
  reducers: {
    setPostsList: (state, action) => {
      state.list = action.payload;
    },
    setDetailsPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { setPostsList, setDetailsPost } = postsSlice.actions;

export default postsSlice.reducer;