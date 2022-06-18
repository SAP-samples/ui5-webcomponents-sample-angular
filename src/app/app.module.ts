import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ListComponent } from './list/list.component';

// UI5 Web Components used
import {setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents-base/dist/features/F6Navigation';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/List';
import '@ui5/webcomponents/dist/CustomListItem';
import '@ui5/webcomponents/dist/Panel';
import '@ui5/webcomponents/dist/Dialog';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/TextArea';
import '@ui5/webcomponents/dist/StandardListItem';
import '@ui5/webcomponents/dist/Tab';
import '@ui5/webcomponents/dist/TabContainer';
import '@ui5/webcomponents-fiori/dist/ShellBar';
import '@ui5/webcomponents-fiori/dist/ShellBarItem';
import '@ui5/webcomponents-icons/dist/palette.js';
import '@ui5/webcomponents-fiori/dist/Assets';
setTheme('sap_horizon');
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
