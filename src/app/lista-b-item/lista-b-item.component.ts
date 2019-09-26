import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Member {
  id: number;
  fname: string;
  lname: string;
}

@Component({
  selector: 'app-lista-b-item',
  templateUrl: 'lista-b-item.component.html',
  styleUrls: ['lista-b-item.component.scss']
})

export class ListaBItemComponent implements OnInit {

  @Input() member: Member;
  @Output() clickFName: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickLName: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickRemove: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  clickFNameHandler() {
    this.clickFName.emit(this.member.id);
  }

  clickLNameHandler() {
    this.clickLName.emit(this.member.id);
  }

  clickRemoveHandler() {
    this.clickRemove.emit(this.member.id);
  }

  ngOnInit() {}
}
