import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from "../../helpers/url";
import axios from "axios";

const initialState = {
    reservations: [],
    selectedCar: null,
    formOpened: false,
    modalOpened: false,
    isLoading: false,
    errors: null,
    resInfo: null
}

export const fetchReservations = createAsyncThunk(
    'reservation/fetchReservations',
    async (thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        try {
            const response = await axios.get(`${baseUrl}/reservations`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data.data;
        } catch (error) {
            if (error.response.status === 401) {
                return thunkAPI.rejectWithValue('Unauthorized');
            }
            return thunkAPI.rejectWithValue('something went wrong!');
        }
    },
);

//creating reservation
export const createReservation = createAsyncThunk(
    'reservation/createReservation',
    async (reservation, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        try {
            const response = await axios.post(`${baseUrl}/reservations`, reservation, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            if (error.response.status === 422) {
                return thunkAPI.rejectWithValue('username and email must be unique');
            } else if (error.response.status === 401) {
                return thunkAPI.rejectWithValue('Unauthorized');
            }
            return thunkAPI.rejectWithValue('something went wrong!');
        }
    },
);

// deleting reservation
export const deleteReservation = createAsyncThunk(
    'reservation/deleteReservation',
    async (reservation, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        try {
            const response = await axios.delete(`${baseUrl}/reservations/${reservation}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            if (error.response.status === 401) {
                return thunkAPI.rejectWithValue('Unauthorized');
            }
            return thunkAPI.rejectWithValue('something went wrong!');
        }
    },
);

const ReservationSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: { 
        openForm: (state) => {state.formOpened = true;},
        closeForm: (state) => {state.formOpened = false;},
        selectCar: (state, {payload}) => {state.selectedCar = payload;},
        openModal: (state) => {state.modalOpened = true;},
        closeModal: (state) => {state.modalOpened = false;},
        getResInfo: (state, {payload}) => {state.resInfo = payload;},

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReservations.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchReservations.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.reservations = payload;
            })
            .addCase(fetchReservations.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errors = payload;
            })
            .addCase(createReservation.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createReservation.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(createReservation.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errors = payload;
            })
            .addCase(deleteReservation.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(deleteReservation.rejected, (state, { payload }) => {
                state.errors = payload;
            })
    },
})

export const { openForm, closeForm, selectCar, openModal, closeModal, getResInfo } = ReservationSlice.actions
export default ReservationSlice.reducer