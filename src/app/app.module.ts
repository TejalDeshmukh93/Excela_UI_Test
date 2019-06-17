import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainsComponent } from './layout/contains/contains.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HowItWorkComponent } from './modules/how-it-work/how-it-work.component';
import { AddUserComponent } from './modules/users/add-user/add-user.component';
import { UserContainerComponent } from './modules/users/user-container/user-container.component';
import { UserListComponent } from './modules/users/user-list/user-list.component';
import {MatSortModule} from '@angular/material/sort'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainsComponent,
    HowItWorkComponent,
    UserListComponent,
    AddUserComponent,
    UserContainerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
