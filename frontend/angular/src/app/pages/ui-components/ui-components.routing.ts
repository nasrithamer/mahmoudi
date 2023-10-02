import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import {AuthGuard} from "../../services/auth.guard";

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badge',
        component: AppBadgeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'chips',
        component: AppChipsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'lists',
        component: AppListsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'menu',
        component: AppMenuComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];
