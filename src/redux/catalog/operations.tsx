import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Camper {
  id: string;
  name: string;
}

const apiClient = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
});

export const getCatalog = createAsyncThunk<
    { items: Camper[]; total: number },
    { page?: number; limit?: number; filter?: string, location?: string }
>(
    "campers/getCatalog",
    async (params, thunkAPI) => {
        try {
            const { page = 1, limit = 10, filter = "", location = "" } = params;
            
            const { data } = await apiClient.get<{ items: Camper[]; total: number }>("/", {
                params: {
                    page,
                    limit,
                    ...filter,
                    location,
                },
            });
            
            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const getCamperById = createAsyncThunk<Camper, string, { rejectValue: string }>(
    "campers/getCamperById",
    async (id, thunkAPI) => {
        try {
            const { data } = await apiClient.get<Camper>(`/${id}`);
            return data;
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue("An unknown error occurred");
        }
    }
);