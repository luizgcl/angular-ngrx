import { ActionReducerMap } from '@ngrx/store';
import { BookReducer } from '../state/books/book.reducer';
import { IAppState } from './app.state';

export const appReducer: ActionReducerMap<IAppState> = {
    books: BookReducer
};