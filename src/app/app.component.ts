import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [FormComponent, ListComponent],
  template: `
    <app-form/>
    <app-list/>
  `,
})
export class AppComponent { }
