import { Dispatch, createSlice } from "@reduxjs/toolkit"
import { Settings } from "./Models/Settings"
import axios from "axios"

type SettingsState = {
    screen: {
        loading: boolean,
        error: string
    }
    data: {
        settings: Settings,
    }
}

const initialState: SettingsState = {
    screen: {
        loading: false,
        error: ""
    },
    data: {
        settings: {}
    }
}

const settingsSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        setLoading: (state, { payload }) => {
            state.screen.loading = payload;
        },
        setError: (state, { payload }) => {
            state.screen.error = payload;
        },
        setSettings: (state, { payload }) => {
            state.data.settings = payload;
        }
    }
});

export const {
    setLoading,
    setError,
    setSettings
} = settingsSlice.actions;

export const getSettings = () => (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const baseUrl = "https://dummy.restapiexample.com/api/v1/employees";
    axios.get(baseUrl).then((responce) => {
        dispatch(setSettings(responce.data));
        dispatch(setLoading(false));
    }).catch((error) => {
        dispatch(setError(error))
    })
}

export default settingsSlice.reducer;