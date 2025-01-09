import { createReducer, on } from "@ngrx/store";
import { StateStatus } from "../base.state";
import { BookState } from "./book.state";

import * as bookActions from './book.actions';

const initialState: BookState = {
    data: [],
    error: null,
    status: StateStatus.pending
}

export const BookReducer = createReducer(
    initialState,
    on(bookActions.listBooks, (state) => {
        return {
            ...state,
            status: StateStatus.success
        }
    }),
    on(bookActions.addBooks, (state, newBook) => {
        return {
            ...state,
            data: [...state.data, newBook],
            status: StateStatus.success
        }
    })
)