import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as bookActions from '../../state/books/book.actions';
import { bookSelector } from '../../state/books/book.selector';

@Component({
  selector: 'app-list',
  imports: [AsyncPipe],
  template: `
    @for(book of books$ | async; track $index) {
      <p>
          <b>Livro: </b> {{ book.name }}
          <b>Autor: </b> {{ book.author }}
      </p>
    }
  `,
})
export class ListComponent {
  store = inject(Store)

  books$ = this.store.select(bookSelector)

  constructor() {
    this.store.dispatch(bookActions.listBooks())
  }
}
