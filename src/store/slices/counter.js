import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  count: 0,
  watchList: [],
};
const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increaseCounter: (state, action) => {
      state.count = state.count + 1;
    },
    decreaseCounter: (state, action) => {
      state.count = state.count - 1;
    },
    addmovie:(state,action)=>{
      state.watchList.push(action.payload);
    },
    removemovie:(state,action)=>{
      state.watchList=state.watchList.filter(movie=>movie.id!=action.payload)
    }
  },
});

export const { increaseCounter,decreaseCounter,addmovie,removemovie } = counterSlice.actions;

export default counterSlice.reducer;
