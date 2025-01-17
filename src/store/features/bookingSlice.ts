import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  bookings: Array<{
    name: string;
    price: number;
    time: string;
    quantity: number;
  }>;
}

const initialState: BookingState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<{ name: string; price: number; time: string; quantity: number }>) => {
      state.bookings.push(action.payload);
    },
    removeBooking: (state, action: PayloadAction<number>) => {
      state.bookings.splice(action.payload, 1);
    },
    clearBookings: (state) => {
      state.bookings = [];
    },
  },
});

export const { addBooking, removeBooking, clearBookings } = bookingSlice.actions;
export default bookingSlice.reducer;
