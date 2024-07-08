import { configureStore } from '@reduxjs/toolkit';
import DataReducer from './reducer/DataReducer';

const store = configureStore({
    reducer: {
        datareducer: DataReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
})

export default store