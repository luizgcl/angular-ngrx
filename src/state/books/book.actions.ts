import { createAction, props } from "@ngrx/store";
import { Book } from "./book.state";

export const listBooks = createAction('[Books] List Books')
export const addBooks = createAction('[Books] Add Books', props<Book>())