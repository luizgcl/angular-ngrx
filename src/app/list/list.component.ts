import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as bookActions from '../../core/books/book.actions';
import { bookSelector } from '../../core/books/book.selector';

@Component({
  selector: 'app-list',
  imports: [AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent {
  store = inject(Store)

  books$ = this.store.select(bookSelector)

  constructor() {
    this.store.dispatch(bookActions.listBooks())
  }
}
