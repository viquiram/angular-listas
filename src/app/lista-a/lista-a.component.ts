import { Component, OnInit} from '@angular/core';

interface Member {
  id: number;
  fname: string;
  lname: string;
}

@Component({
  selector: 'app-lista-a',
  templateUrl: './lista-a.component.html',
  styleUrls: ['./lista-a.component.scss']
})
export class ListaAComponent implements OnInit {

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

  editFNameOfMemberById(id:number) {
    console.log('Edit First Name of member with id:' + id);
  }

  editLNameOfMemberById(id:number) {
    console.log('Edit Last Name of member with id:' + id);
  }

  removeMemberById(id:number) {
    console.log('Removed member with id:'+id);
    let i: number;
    for ( i = 0; i < this.memberList.length; i++) {
      if ( this.memberList[i].id === id ) this.memberList.splice(i,1);
    }
  }

  ngOnInit() {
  }

}
