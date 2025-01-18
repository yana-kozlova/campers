import { createSelector } from "@reduxjs/toolkit";

import { CampersState } from "./types.ts";

export const selectCampersState = (state: CampersState) => state;

export const selectAllCampers = createSelector(
  selectCampersState,
  (campersState) => campersState.campers
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
