import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { AppComponent } from './app.component';
import { FormlyFieldInput } from './formly-field-input';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [{ name: 'input', component: FormlyFieldInput }],
    }),
  ],
  declarations: [AppComponent, FormlyFieldInput],
  bootstrap: [AppComponent],
})
export class AppModule {}
