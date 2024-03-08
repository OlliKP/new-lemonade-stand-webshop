import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

// Load state from local storage
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

// Create store with initial state
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools()
);

// Subscribe to store changes and update local storage
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;