import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule}  from '@angular/material/paginator';
import { UserService } from '../user/user.service'
import { User } from '../user/user.model';

let emailList:User[] = [];

@Component({
  selector: 'app-roamer-table',
  templateUrl: './roamer-table.component.html',
  styleUrls: ['./roamer-table.component.scss'],
})

export class RoamerTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'id'];
  dataSource = new MatTableDataSource(emailList);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    emailList = this.userService.getUsers();
  }

  ngAfterViewInit():void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

}
