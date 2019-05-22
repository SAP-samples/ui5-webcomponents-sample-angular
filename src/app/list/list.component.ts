import { Component, OnInit, Output, Input, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() todos;
  @Output() deletedItem = new EventEmitter();
  @Output() changeSelection = new EventEmitter();
  @Output() editPressed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleEdit(event) {
    this.editPressed.emit({
      id: event
    });
  }

  handleDeleteItem(itemId) {
    this.deletedItem.emit(itemId);
  }

  handleChangeSelection($event) {
    this.changeSelection.emit({
      selected: $event.detail.selectedItems
    });
  }
}
