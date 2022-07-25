import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Components/features/todos/todoSlice";
import filterReducer from "./Components/features/filters/filtersSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filterReducer,
  },
});

export default store;
