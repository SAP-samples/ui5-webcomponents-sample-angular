import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import {setTheme } from '@ui5/webcomponents-base/dist/config/Theme';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
	@Input() selectionChange;
	@ViewChild('themeSettingsPopover') themeSettingsPopover: ElementRef;
	@ViewChild('profileSettingsPopover') profileSettingsPopover: ElementRef;

	constructor() { }

	ngOnInit() {
	}

	handleThemeSettingsToggle(event) {
		this.themeSettingsPopover.nativeElement.showAt(event.detail.targetRef);
	}

	handleThemeChange(event) {
		setTheme(event.detail.selectedItems[0].getAttribute('data-theme'));
		this.themeSettingsPopover.nativeElement.close();
	}

	handleProfileClick(event) {
		this.profileSettingsPopover.nativeElement.showAt(event.detail.targetRef);
	}

	handleProfileSettingsSelect(event) {
		const selectedKey = event.detail.item.getAttribute('data-key');
		if (selectedKey === 'settings') {
			window['settings-dialog'].show(event.detail.targetRef);
		 } else if (selectedKey === 'help') {
			window['help-dialog'].show(event.detail.targetRef);
		}
	}

	handleRtlSwitchChange(event) {
		document.body.dir = event.target.checked ? 'rtl' : 'ltr';
	}

	handleContentDensitySwitchChange(event) {
		if (event.target.checked) {
			document.body.classList.add('ui5-content-density-compact');
		} else {
			document.body.classList.remove('ui5-content-density-compact');
		}
	}

	handleSettingsDialogCloseButtonClick(event) {
		window['settings-dialog'].close();
	}

	handleHelpDialogCloseButtonClick(event) {
		window['help-dialog'].close();
	}
}
