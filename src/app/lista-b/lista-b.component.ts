import { Component, OnInit} from '@angular/core';

interface Member {
  id: number;
  fname: string;
  lname: string;
}

@Component({
  selector: 'app-lista-b',
  templateUrl: './lista-b.component.html',
  styleUrls: ['./lista-b.component.scss']
})
export class ListaBComponent implements OnInit {

  private memberListDefaults: Array<Member> = [
    { id: 0, fname: 'Peter', lname: 'Fluster'},
    { id: 1, fname: 'Jare', lname: 'Enare'},
    { id: 2, fname: 'Jane', lname: 'Winsburg'}
  ];

  memberList: Array<Member> = [];

  constructor() {
    // Load default list
    for (const member of this.memberListDefaults){
      this.addMember(member);
    }
  }

  // Add member
  addMember(member: Member) {
    this.memberList.push(member);
  }

  editMemberById(id:number) {
    console.log('Edited member with id:'+id);
  }

  removeMemberById(id:number) {
    console.log('Removed member with id:'+id);
    let i: number;
    for ( i = 0; i < this.memberList.length; i++) {
      if ( this.memberList[i].id === id ) this.memberList.splice(i,1);
    }
  }

  onEditFName(id:number):void {
    console.log("Edit First Name of "+id);
  }

  onEditLName(id:number):void {
    console.log("Edit Last Name of "+id);
  }

  onRemoveMember(id:number):void {
    console.log("Remove member with id: "+id);
    this.removeMemberById(id);
  }

  ngOnInit() {
  }

}

