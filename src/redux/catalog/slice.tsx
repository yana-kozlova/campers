import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCatalog, getCamperById } from "./operations";
import { Camper, CampersState } from "./types.ts";

const initialState: CampersState = {
  campers: {
    items: [],
    total: 0,
  },
  selectedCamper: null,
  isLoading: false,
  isFetched: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetSelectedCamper: (state) => {
      state.selectedCamper = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getCatalog.fulfilled,
        (
          state: CampersState,
          action: PayloadAction<{ items: Camper[]; total: number }>
        ) => {
          state.campers = {
            items: action.payload.items,
            total: action.payload.total,
          };
          state.isLoading = false;
          state.isFetched = true;
        }
      )
      .addCase(
        getCamperById.fulfilled,
        (state: CampersState, action: PayloadAction<Camper>) => {
          state.selectedCamper = action.payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state: CampersState) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state: CampersState, action) => {
          state.isLoading = false;
          state.error = action.error?.message || "Something went wrong";
        }
      );
  },
});

export const campersReducer = campersSlice.reducer;
