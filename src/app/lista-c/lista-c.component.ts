import { Component, OnInit} from '@angular/core';

interface Member {
  id: number;
  fname: string;
  lname: string;
}

@Component({
  selector: 'app-lista-c',
  templateUrl: './lista-c.component.html',
  styleUrls: ['./lista-c.component.scss']
})

export class ListaCComponent implements OnInit {

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

  editMemberFName(index:number) {
    console.log('Edit member with index:'+index+' First Name' );
  }

  editMemberLName(index:number) {
    console.log('Edit member with index:'+index+' Last Name' );
  }

  removeMember(index:number) {
    console.log('Removed member with index:'+index+' First Name' );
    this.memberList.splice(index,1);
  }

  ngOnInit() {
  }

}

