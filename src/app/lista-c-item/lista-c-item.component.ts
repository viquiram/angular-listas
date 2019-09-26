import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Member {
  id: number;
  fname: string;
  lname: string;
}

@Component({
  selector: 'app-lista-c-item',
  templateUrl: 'lista-c-item.component.html',
  styleUrls: ['lista-c-item.component.scss']
})

export class ListaCItemComponent implements OnInit {

  i:number;

  @Input() member: Member;
  @Output() clickFName: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickLName: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickRemove: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  clickFNameHandler() {
    this.clickFName.emit();
  }

  clickLNameHandler() {
    this.clickLName.emit();
  }

  clickRemoveHandler() {
    this.clickRemove.emit();
  }

  ngOnInit() {}
}
