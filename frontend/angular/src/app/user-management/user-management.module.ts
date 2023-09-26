import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationComponent} from './authentication/authentication.component';
import {FormsModule} from '@angular/forms';
import {UserManagementRoutingModule} from "./user-management-routing.module";

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserManagementRoutingModule,
  ]
})
export class UserManagementModule {
}
