import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCatalog, getCamperById } from "./operations";
import { ICamper, CampersState } from "./types.ts";

const initialState: CampersState = {
    campers: {
        catalog: {
            items: [], total: 0,
        },
        selectedCamper: null, isLoading: false, isFetched: false, error: null,
    },
};

const campersSlice = createSlice({
    name: "campers", initialState, reducers: {
        resetSelectedCamper: (state) => {
            state.campers.selectedCamper = null;
        },
    }, extraReducers: (builder) => {
        builder
            .addCase(getCatalog.fulfilled, (state: CampersState, action: PayloadAction<{
                items: ICamper[];
                total: number
            }>) => {
                state.campers.catalog = {
                    items: action.payload.items, total: action.payload.total,
                };
            })
            .addCase(getCamperById.fulfilled, (state: CampersState, action: PayloadAction<ICamper>) => {
                state.campers.selectedCamper = action.payload;
            })
            .addMatcher((action) => action.type.endsWith("/pending"), (state: CampersState) => {
                state.campers.isLoading = true;
                state.campers.error = null;
            })
            .addMatcher((action) => action.type.endsWith("/fulfilled"), (state: CampersState) => {
                state.campers.isLoading = false;
                state.campers.isFetched = true;
                state.campers.error = null;
            })
            .addMatcher((action) => action.type.endsWith("/rejected"), (state: CampersState) => {
                state.campers.isLoading = false;
                state.campers.error =  "Something went wrong";
            });
    },
});

export const campersReducer = campersSlice.reducer;
