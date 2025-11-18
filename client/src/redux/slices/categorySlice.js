import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../api.js";
const initialState = {
    categories: [],
    loading: false,
    error: null
}

export const getCategories = createAsyncThunk("getCategories", async (_, { rejectWithValue }) => {

    try {

        const response = await api.get("/categories")

        return response.data;

    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
})

export const deleteCategory = createAsyncThunk("deleteCategory", async (id, { rejectWithValue }) => {
    try {
        const response = await api.delete(`/categories/${id}`)
        return id;

    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
})

export const addCategory = createAsyncThunk("addCategory", async (categoryData, { rejectWithValue }) => {
    try {
        // Let axios/browser set the Content-Type (with boundary) for FormData
        const response = await api.post("/categories", categoryData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
})

const categoriesSlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getCategories.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        builder.addCase(getCategories.fulfilled, (state, action) => {
            console.log(action);

            state.loading = false;
            state.categories = action.payload;
        })

        builder.addCase(getCategories.rejected, (state, action) => {
            console.log(action);

            state.loading = false;
            state.error = action.payload;
        })

        // Delete Category
        builder.addCase(deleteCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = state.categories.filter(category => category.categoryId != action.payload);
        })

        builder.addCase(deleteCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // Add Category

        builder.addCase(addCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.categories.push(action.payload);
        })

        builder.addCase(addCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default categoriesSlice.reducer;