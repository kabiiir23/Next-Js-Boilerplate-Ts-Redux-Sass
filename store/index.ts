import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [], // persisting reducers ['reducerName']
};

//create persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//create redux store
let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (process.env.NODE_ENV == 'development') {
  store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
} else if (process.env.NODE_ENV == 'production') {
  store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
}

const persistor = persistStore(store);

export { store, persistor };
