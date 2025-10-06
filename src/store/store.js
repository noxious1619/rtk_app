import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../feature/counter/counterSlice.js";
import AuthReducer from "../feature/auth/AuthSlice.js";
// import userReducer from "../feature/user/userSlice.js";

const loggerMiddleware = storeAPI => next => action => {
  console.log('Dispatching action: ', action);
  const result = next(action);
  console.log('Next state: ', storeAPI.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth: AuthReducer,
    // user: userReducer
  },
  devTools: true
});
