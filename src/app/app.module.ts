import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { AppItemComponent } from './app-item/app-item.component';

import {AppRoutingModule} from './app-routing/app-routing.module';

import { AppServiceService } from './app-service.service';
import { AppListComponent } from './app-list/app-list.component'

import { LoadersCssModule } from 'angular2-loaders-css';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    AppDetailComponent,
    AppItemComponent,
    AppListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadersCssModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
