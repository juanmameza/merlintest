import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RootObject , Child } from '../app.interfaces';
import {AppServiceService } from '../app-service.service'


@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {
  
  private results : Child[];

  private selectedApp : Child;

  constructor(
    private http : HttpClient,
    private appService : AppServiceService
  ) { }

  ngOnInit() {
  
    this.appService.getChildren().then(children => this.results = children);

  }

  selectApp(app: Child) : void {
    this.selectedApp = app;
  }

}
