import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import {CategoryComponent } from '../category/category.component';
import {AppItemComponent } from '../app-item/app-item.component';
import {AppDetailComponent } from '../app-detail/app-detail.component';
import {AppListComponent} from '../app-list/app-list.component'

const ROUTES : Routes = [
  { path: 'category', component: CategoryComponent},
  { path: 'app-item', component: AppItemComponent},
  { path: 'app-detail', component: AppDetailComponent},
  { path: 'app-list', component: AppListComponent},
  { path: '',   redirectTo: '/category', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
