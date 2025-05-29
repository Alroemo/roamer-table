import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  // dataSource = emailList;

  dataSource = new MatTableDataSource(emailList);

  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void {
    this.dataSource.sort = this.sort;
  }

  announceSortChange() {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
  }

}
