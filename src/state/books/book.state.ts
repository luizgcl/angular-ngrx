import { BaseState } from "../base.state";

export interface Book {
    name: string,
    author: string
}

export interface BookState extends BaseState {
    data: Book[]
}