import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./../Reducers/login/loginSlice";
import settingsSlice from "./settings/settingsSlice";

const appReducer = combineReducers({
login: loginSlice,
settings: settingsSlice
});

export type RootState = ReturnType<typeof appReducer>;

const rootReducer = (state: RootState | undefined, actions: AnyAction) => {
    if(actions.type === "Logout") {
        state = undefined;
    }
    return appReducer(state, actions);
}

export const Logout = "LOGOUT";

const store = configureStore({
    reducer: rootReducer
});

export default store;

export type AppDispatch = typeof store.dispatch;