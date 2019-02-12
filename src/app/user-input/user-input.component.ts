import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  @ViewChild('textInput') text: ElementRef;
  @ViewChild('dateInput') date: ElementRef;

  @Output() addTodo = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }

  handleAddTodo() {
    this.addTodo.emit({
      text: this.text.nativeElement.value,
      date: this.date.nativeElement.value
    });
  }

}
