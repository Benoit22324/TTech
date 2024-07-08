import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchValues = createAsyncThunk(
    'data/fetchValues',
    async() => {
        const response = await axios.get(`https://api.worldbank.org/v2/country/${state.region.toLowerCase()}/indicator/${state.indicator}?format=jsonp&amp;page=1`)
        return response.data
    }
)

const DataReducer = createSlice({
    name: 'data',
    initialState: {
        status: 'idle',
        loadingmsg: '',
        datas: [],
        region: '',
        indicator: '',
    },
    reducers: {
        updateRegion(state, action) {
            state.region = action.payload;
        },
        updateIndicator(state, action) {
            state.indicator = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchValues.fulfilled, (state, action) => {
            state.datas = action.payload;
            state.status = 'idle';
            state.loadingmsg = '';
            console.log(action)
        }),
        builder.addCase(fetchValues.pending, (state, action) => {
            state.status = 'loading';
            state.loadingmsg = 'Searching...';
        }),
        builder.addCase(fetchValues.rejected, (state, action) => {
            state.status = 'rejected';
            state.loadingmsg = 'Error';
        })
    }
})

export const {
    updateRegion,
    updateIndicator,
} = DataReducer.actions;

export default DataReducer.reducer