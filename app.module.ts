import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table' ;
import { MatPaginator, MatPaginatorModule}  from '@angular/material/paginator';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestItemComponent } from './test-item/test-item.component';
import { RoamerTableComponent } from './roamer-table/roamer-table.component';
import { UserService } from './user/user.service'


@NgModule({
  declarations: [
    AppComponent,
    TestItemComponent,
    RoamerTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { 


  ngOnInit(): void { }
    
}
