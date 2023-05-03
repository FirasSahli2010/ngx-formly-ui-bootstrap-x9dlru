import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
   <input type="input" [formControl]="formControl" [formlyAttributes]="field">
 `,
})
export class FormlyFieldInput
  extends FieldType<FieldTypeConfig>
  implements OnInit
{
  ngOnInit() {
    this.form.get('email').setValue('sdssd');
  }
}
