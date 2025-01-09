import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as bookActions from '../../core/books/book.actions';

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass'
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
