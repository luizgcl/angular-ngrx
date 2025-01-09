import { IAppState } from "../../app/app.state";

export const bookSelector = (appState: IAppState) => appState.books.data;