import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { Employees } from "./Model/Employee";
import { User } from "./Model/User";
import axios from "axios";

const initialState: EmployeeState = {
    screen: {
        loading: false,
        error: ""
    },
    data: {
        employees: [],
        accessToken: '',
        user: []
    }
}

type EmployeeState = {
    screen: {
        loading: boolean,
        error: string
    }
    data: {
        employees: Employees[],
        accessToken: ''
        user: User[],
    }
}


const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        setLoading: (state, { payload }) => {
            state.screen.loading = payload;
        },
        setError: (state, { payload }) => {
            state.screen.error = payload;
        },
        setEmployees: (state, { payload }) => {
            state.data.employees = payload;
        }
    }
});

export const {
    setLoading,
    setError,
    setEmployees
} = loginSlice.actions;

const apiConfig = {
    header: {
        'Content-Type': 'application/json'
    }
}

export const getEmployees = () => (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const baseUrl = "https://dummy.restapiexample.com/api/v1/employees";
    axios.get(baseUrl).then((responce) => {
        dispatch(setEmployees(responce.data));
        dispatch(setLoading(false));
    }).catch((error) => {
        dispatch(setError(error))
    })
}

export default loginSlice.reducer;