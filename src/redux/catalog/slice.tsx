import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { getCatalog, getCamperById } from "./operations";
import { ICamper, CampersState } from "./types.ts";

const initialState: CampersState = {
    campers: {
        items: [{
            id: '1',
            name: 'Road Bear C 23-25',
            price: 10000,
            rating: 4.5,
            location: 'Ukraine, Kyiv',
            description: 'Embadventures, promising comfort, style, and the freedom to explore at your own pace.',
            form: 'alcove',
            length: '7.3m',
            width: '2.65m',
            height: '3.65m',
            tank: '208l',
            consumption: '30l/100km',
            transmission: 'automatic',
            engine: 'diesel',
            AC: true,
            bathroom: true,
            kitchen: false,
            TV: true,
            radio: true,
            refrigerator: false,
            microwave: true,
            gas: false,
            water: true,
            gallery: [{
                thumb: 'https://ftp.goit.study/img/campers-test-task/1-1.webp',
                original: 'https://ftp.goit.study/img/campers-test-task/1-1.webp'
            }, {
                thumb: 'https://ftp.goit.study/img/campers-test-task/1-2.webp',
                original: 'https://ftp.goit.study/img/campers-test-task/1-2.webp'
            }, {
                thumb: 'https://ftp.goit.study/img/campers-test-task/1-3.webp',
                original: 'https://ftp.goit.study/img/campers-test-task/1-3.webp'
            }],
            reviews: [{
                reviewer_name: 'Alice',
                reviewer_rating: 5,
                comment: 'Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!'
            }, {
                reviewer_name: 'Bob',
                reviewer_rating: 4,
                comment: 'Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience.'
            }]
        }], total: 0,
    }, selectedCamper: null, isLoading: false, isFetched: false, error: null,
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
                state.campers = {
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
            .addMatcher((action) => action.type.endsWith("/rejected"), (state: CampersState, action) => {
                state.isLoading = false;
                state.error = action.error?.message || "Something went wrong";
            });
    },
});

export const campersReducer = campersSlice.reducer;
