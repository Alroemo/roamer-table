import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule}  from '@angular/material/paginator';

export interface User {
  name: string;
  email: string;
  id: number
}

const emailList:User[] = [
  { name: 'Alice Smith', email: 'alice@example.com', id: 1001 },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com', id: 1002 },
  { name: 'Charlie Brown', email: 'charlie.brown@example.com', id: 1003 },
  { name: 'Dana White', email: 'dana.white@example.com', id: 1004 },
  { name: 'Eve Adams', email: 'eve.adams@example.com', id: 1005 },
  { name: 'Frank Moore', email: 'frank.moore@example.com', id: 1006 },
  { name: 'Grace Lee', email: 'grace.lee@example.com', id: 1007 },
  { name: 'Henry Ford', email: 'henry.ford@example.com', id: 1008 },
  { name: 'Ivy Green', email: 'ivy.green@example.com', id: 1009 },
  { name: 'Jack Black', email: 'jack.black@example.com', id: 1010 },
  { name: 'Karen White', email: 'karen.white@example.com', id: 1011 },
  { name: 'Leo King', email: 'leo.king@example.com', id: 1012 },
  { name: 'Mia Knight', email: 'mia.knight@example.com', id: 1013 },
  { name: 'Nick Stone', email: 'nick.stone@example.com', id: 1014 },
  { name: 'Olivia Cruz', email: 'olivia.cruz@example.com', id: 1015 },
  { name: 'Paul Allen', email: 'paul.allen@example.com', id: 1016 },
  { name: 'Quinn Hill', email: 'quinn.hill@example.com', id: 1017 },
  { name: 'Rachel Wood', email: 'rachel.wood@example.com', id: 1018 },
  { name: 'Steve Nash', email: 'steve.nash@example.com', id: 1019 },
  { name: 'Tina Scott', email: 'tina.scott@example.com', id: 1020 },
  { name: 'Uma Ray', email: 'uma.ray@example.com', id: 1021 },
  { name: 'Victor Gray', email: 'victor.gray@example.com', id: 1022 },
  { name: 'Wendy Young', email: 'wendy.young@example.com', id: 1023 },
  { name: 'Xander Frost', email: 'xander.frost@example.com', id: 1024 },
  { name: 'Yara Bell', email: 'yara.bell@example.com', id: 1025 },
  { name: 'Zane Cruz', email: 'zane.cruz@example.com', id: 1026 },
  { name: 'Ava Brooks', email: 'ava.brooks@example.com', id: 1027 },
  { name: 'Ben Turner', email: 'ben.turner@example.com', id: 1028 },
  { name: 'Cora Reed', email: 'cora.reed@example.com', id: 1029 },
  { name: 'Dylan Chase', email: 'dylan.chase@example.com', id: 1030 },
  { name: 'Ella Fox', email: 'ella.fox@example.com', id: 1031 },
  { name: 'Finn Hale', email: 'finn.hale@example.com', id: 1032 },
  { name: 'Gina Long', email: 'gina.long@example.com', id: 1033 },
  { name: 'Hank Miles', email: 'hank.miles@example.com', id: 1034 },
  { name: 'Isla Webb', email: 'isla.webb@example.com', id: 1035 },
  { name: 'Jake Price', email: 'jake.price@example.com', id: 1036 },
  { name: 'Kyla Lane', email: 'kyla.lane@example.com', id: 1037 },
  { name: 'Liam Ross', email: 'liam.ross@example.com', id: 1038 },
  { name: 'Maya Neal', email: 'maya.neal@example.com', id: 1039 },
  { name: 'Nora Byrd', email: 'nora.byrd@example.com', id: 1040 },
  { name: 'Owen Park', email: 'owen.park@example.com', id: 1041 },
  { name: 'Piper Nash', email: 'piper.nash@example.com', id: 1042 },
  { name: 'Quincy Todd', email: 'quincy.todd@example.com', id: 1043 },
  { name: 'Riley Grant', email: 'riley.grant@example.com', id: 1044 },
  { name: 'Sasha Holt', email: 'sasha.holt@example.com', id: 1045 },
  { name: 'Theo Wade', email: 'theo.wade@example.com', id: 1046 },
  { name: 'Ursula Page', email: 'ursula.page@example.com', id: 1047 },
  { name: 'Vera Snow', email: 'vera.snow@example.com', id: 1048 },
  { name: 'Wyatt Lane', email: 'wyatt.lane@example.com', id: 1049 },
  { name: 'Zoe Stone', email: 'zoe.stone@example.com', id: 1050 }
];

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

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

}
