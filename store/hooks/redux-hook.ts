import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppDispatch, AppState, RootState } from '../index';

export const useAppDispatch: AppDispatch = useDispatch;
export type thunkDispatch = ThunkDispatch<AppState, any, AnyAction>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
