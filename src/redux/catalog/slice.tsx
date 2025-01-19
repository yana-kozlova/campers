import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCatalog, getCamperById } from "./operations";
import { ICamper, CampersState } from "./types.ts";

const initialState: CampersState = {
    catalog: {
        items: [], total: 0,
    },
    selectedCamper: null, isLoading: false, isFetched: false, error: null,
};

const campersSlice = createSlice({
    name: "campers", initialState, reducers: {
        resetSelectedCamper: (state) => {
            state.selectedCamper = null;
        },
    }, extraReducers: (builder) => {
        builder
            .addCase(getCatalog.fulfilled, (state: CampersState, action: PayloadAction<{
                items: ICamper[];
                total: number
            }>) => {
                state.catalog = {
                    items: action.payload.items, total: action.payload.total,
                };
            })
            .addCase(getCamperById.fulfilled, (state: CampersState, action: PayloadAction<ICamper>) => {
                state.selectedCamper = action.payload;
            })
            .addMatcher((action) => action.type.endsWith("/pending"), (state: CampersState) => {
                state.isLoading = true;
                state.error = null;
            })
            .addMatcher((action) => action.type.endsWith("/fulfilled"), (state: CampersState) => {
                state.isLoading = false;
                state.isFetched = true;
                state.error = null;
            })
            .addMatcher((action) => action.type.endsWith("/rejected"), (state: CampersState) => {
                state.isLoading = false;
                state.error =  "Something went wrong";
            });
    },
});

export const campersReducer = campersSlice.reducer;
