import { configureStore } from '@reduxjs/toolkit';
import AuthenticationReducer from './slices/AuthSlice';
import CarReducer from './slices/CarSlice';
import ReservationReducer from './slices/ReservationSlice';

const store = configureStore({
  reducer: {
    auth: AuthenticationReducer,
    cars: CarReducer,
    reserve: ReservationReducer
  },
});

export default store;