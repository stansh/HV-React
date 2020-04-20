import { createStore,combineReducers } from 'redux';
import { snacksReducer} from './snacks_reducer';
import { menuReducer } from './menu_reducer';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            snacks: snacksReducer,
            menu: menuReducer
            })
    );

    return store;
};