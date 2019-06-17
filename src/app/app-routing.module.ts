import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainsComponent } from './layout/contains/contains.component';
import { HowItWorkComponent } from './modules/how-it-work/how-it-work.component';
import { UserContainerComponent } from './modules/users/user-container/user-container.component';
import { AddUserComponent } from './modules/users/add-user/add-user.component';

const routes: Routes = [
  {
    path: '', component: ContainsComponent,
    children: [
      { path: 'howItWorks', component: HowItWorkComponent },
      { path: 'userContainer', component: UserContainerComponent },
      { path: 'adduser', component: AddUserComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
