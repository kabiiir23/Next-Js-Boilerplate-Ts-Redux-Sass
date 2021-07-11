import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose,
  Action,
  AnyAction,
} from 'redux';
import { rootReducer } from './rootReducer';

const encryptor = encryptTransform({
  secretKey: process.env.redux_SECRET,
  onError(error) {
    console.log(error);
  },
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptor],
  whitelist: [], // persisting reducers ['reducerName']
};

// create persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

// create redux store
let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

if (process.env.NODE_ENV === 'development') {
  store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(thunk as ThunkMiddleware<AppState, Action<any>>),
    ),
  );
} else if (process.env.NODE_ENV === 'production') {
  store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
}

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: AppDispatch = useDispatch;
export type thunkDispatch = ThunkDispatch<AppState, any, AnyAction>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
