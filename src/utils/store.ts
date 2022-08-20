import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    updated: (state, action: { payload: number }) => {
      state.value = action.payload;
    },
  },
});

export const { updated } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

const state = store.getState();
export type State = typeof state;

// export const getCount = () => store.getState().value;
// export const setCount = (count: number) => store.dispatch(updated(count));
