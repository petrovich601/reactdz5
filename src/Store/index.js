import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redusers/toggleTheme';

const store = configureStore({
    reducer: rootReducer
});

export default store;