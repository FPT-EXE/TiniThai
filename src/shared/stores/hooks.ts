import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, AppState } from './reduxStore';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
