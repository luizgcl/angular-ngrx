import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as bookActions from '../../state/books/book.actions';

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="addBook()">
      <p>
          <label for="author">Autor</label>
          <input id="author" formControlName="author" />
      </p>
      <p>
          <label for="book">Nome do Livro</label>
          <input id="book" formControlName="name" />
      </p>
      <p>
          <button type="submit">Adicionar</button>
      </p>
    </form>
  `,
})
export class FormComponent {
  formBuilder = inject(FormBuilder)
  store = inject(Store)

  form: FormGroup = this.formBuilder.group({
    author: null,
    name: null
  })

  addBook() {
    if (this.form.invalid) return;
    this.store.dispatch(bookActions.addBooks(this.form.value))
  }
}
