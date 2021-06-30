import { createStore ,combineReducers} from 'redux'
import counter from '../reducers/counter';
import favoriteReducer from '../reducers/favoritesreducer'


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



    const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    const reducers=combineReducers({
        favorites : favoriteReducer,
        counter : counter,
    });

    const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorites'],
    blackList : ["counter"]
    }

  const persistedReducer = persistReducer(persistConfig,reducers);

  //const store =createStore(reducers,devtools)



export let store = createStore(persistedReducer,devtools) ;
export let persistor = persistStore(store) ;

 