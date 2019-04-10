import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ListComponent } from './list/list.component';

import "@ui5/webcomponents-base/src/sap/ui/webcomponents/base/browsersupport/Edge";
// UI5 Web Components used
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/ShellBar';
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/List';
import '@ui5/webcomponents/dist/CustomListItem';
import '@ui5/webcomponents/dist/Panel';
import '@ui5/webcomponents/dist/Dialog';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/TextArea';
import '@ui5/webcomponents/dist/InputSuggestions';
import '@ui5/webcomponents/dist/StandardListItem';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    UserInputComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
