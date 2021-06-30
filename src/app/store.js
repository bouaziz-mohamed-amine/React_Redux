import { createStore ,combineReducers} from 'redux'
import counter from '../reducers/counter';
import favoriteReducer from '../reducers/favoritesreducer'



const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const store =createStore(combineReducers({
    favorites : favoriteReducer,
    counter : counter,
}),devtools)



export default store  ;