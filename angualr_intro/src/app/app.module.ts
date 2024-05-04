import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { AlertComponent } from './alert/alert.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ParentComponent,
    ChildComponent,
    AlertComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
