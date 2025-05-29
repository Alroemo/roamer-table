import { Component, OnInit } from '@angular/core';

export interface User {
  name: string;
  email: string;
  id: number
}

const emailList:User[] = [
  { name: 'Alice Smith', email: 'alice@example.com', id: 123 },
  { name: 'Bob Johnson', email: 'bob@example.com', id: 234 },
  { name: 'Charlie Brown', email: 'charlie@example.com', id: 3434 }
];

@Component({
  selector: 'app-roamer-table',
  templateUrl: './roamer-table.component.html',
  styleUrls: ['./roamer-table.component.scss'],
})

export class RoamerTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'id'];
  dataSource = emailList;
  constructor() { }

  ngOnInit(): void {
  }

}
