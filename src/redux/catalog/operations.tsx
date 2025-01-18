import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Camper {
  id: string;
  name: string;
}

const apiClient = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
});

export const getCatalog = createAsyncThunk<{ items: Camper[]; total: number }>(
  "campers/getCatalog",
  async (_, thunkAPI) => {
    try {
      const { data } = await apiClient.get<Camper[]>("/");
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk<Camper, string>(
  "campers/getCamperById",
  async (id, thunkAPI) => {
    try {
      const { data } = await apiClient.get<Camper>(`/${id}`);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
