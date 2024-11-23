import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../helpers/url";

const initialState = {
    cars: [],
    car: null,
    currentCar: null,
    isLoading: false,
    editFormIsOpen: false,
    createFormIsOpen: false,
    errors: null
}

//fetching cars
export const fetchCars = createAsyncThunk(
    'car/fetchCars',
    async (thunkAPI) => {
        try {
            const response = await axios.get(`${baseUrl}/cars`);
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong!');
        }
    },
);

export const fetchCar = createAsyncThunk(
    'car/fetchCar',
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`${baseUrl}/cars/${id}`);
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong!');
        }
    },
);

//creating car
export const createCar = createAsyncThunk(
    'car/createCar',
    async (car, thunkAPI) => {
        try {
            const response = await axios.post(`${baseUrl}/cars`, car);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong!');
        }
    },
);

// update car
export const updateCar = createAsyncThunk(
    'car/updateCar',
    async (car, thunkAPI) => {
        try {
            const response = await axios.patch(`${baseUrl}/cars/${car.id}`, {car: car.formData});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong!');
        }
    },
);

// delete car 
export const deleteCar = createAsyncThunk('car/deleteCar', async (car,thunkAPI)=>{
    try{
        const response = await axios.delete(`${baseUrl}/cars/${car}`);
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue('cannot delete car!')
    }
})

const CarSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        OpenEditForm: (state) => {state.editFormIsOpen=true;},
        OpenCreateForm: (state) => {state.createFormIsOpen=true;},
        CloseEditForm: (state) => {state.editFormIsOpen=false;},
        CloseCreateForm: (state) => {state.createFormIsOpen=false;},
        SetCurrentCar: (state, { payload }) => {state.currentCar = payload;},
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCars.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.cars = payload;
            })
            .addCase(fetchCars.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errors = payload;
            })
            .addCase(fetchCar.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.car = payload;
            })
            .addCase(fetchCar.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errors = payload;
            })
            .addCase(createCar.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createCar.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(createCar.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errors = payload;
            })
            .addCase(deleteCar.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(deleteCar.rejected, (state, { payload }) => {
                state.errors = payload;
            })
    }

})

export const { OpenEditForm, CloseEditForm, SetCurrentCar, OpenCreateForm, CloseCreateForm } = CarSlice.actions;
export default CarSlice.reducer;



