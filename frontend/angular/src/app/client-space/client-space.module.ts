import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ClientSpaceRoutingModule} from "./client-space-routing.module";

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ClientSpaceRoutingModule,
  ]
})
export class ClientSpaceModule {
}
