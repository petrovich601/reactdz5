
import { TOGGLE_THEME } from '../actions/action.js';

const initialState = {
    darkMode: false // начальная тема - светлая
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                darkMode: !state.darkMode // инвертируем текущую тему
            };
        default:
            return state;
    }
};

export default themeReducer;