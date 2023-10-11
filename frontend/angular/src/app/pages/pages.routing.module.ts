import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from "../services/auth.guard";
import {AppProductComponent} from "./product/product.component";

export const PagesRoutes: Routes = [
  {
    path: 'dashboard',
    component: AppDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    component: AppProductComponent,
    canActivate: [AuthGuard],
  },
];

