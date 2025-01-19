import { createSelector } from "@reduxjs/toolkit";

import { CampersState } from "./types.ts";

interface RootState {
    campers: CampersState;
}
export const selectCampersState = (state: RootState) => state.campers;

export const selectAllCampers = createSelector(
    selectCampersState,
    (campersState) => campersState.catalog
);

export const selectSelectedCamper = createSelector(
  selectCampersState,
  (campersState) => campersState.selectedCamper
);

export const selectCampersLoading = createSelector(
  selectCampersState,
  (campersState) => campersState.isLoading
);

export const selectCampersFetched = createSelector(
  selectCampersState,
  (campersState) => campersState.isFetched
);
