import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose, Action } from 'redux';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

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
	whitelist: ['example'], // persisting reducers ['reducerName']
};

// create persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

// create redux store
let store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

if (process.env.NODE_ENV === 'development') {
	store = createStore(
		persistedReducer,
		composeWithDevTools(
			applyMiddleware(
				thunk as ThunkMiddleware<AppState, Action<any>>,
				sagaMiddleware
			)
		)
	);
} else if (process.env.NODE_ENV === 'production') {
	store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
}

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
