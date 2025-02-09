import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICamper } from './types.ts';

const apiClient = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers',
});

export const getCatalog = createAsyncThunk<
  { items: ICamper[]; total: number },
  {
    page?: number;
    limit?: number;
    filter?: {};
    location?: string;
    form?: string;
  }
>('campers/getCatalog', async (params, thunkAPI) => {
  try {
    const { page = 1, limit = 10, filter = {}, form, location = '' } = params;

    const { data } = await apiClient.get<{ items: ICamper[]; total: number }>(
      '/',
      {
        params: {
          page,
          limit,
          form,
          ...filter,
          location,
        },
      }
    );

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('An unknown error occurred');
  }
});

export const getCamperById = createAsyncThunk<ICamper, string | undefined>(
  'campers/getCamperById',
  async (id, thunkAPI) => {
    if (!id) {
      return thunkAPI.rejectWithValue('ID is required');
    }
    try {
      const { data } = await apiClient.get<ICamper>(`/${id}`);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  }
);
