import { Component, Input, OnInit } from '@angular/core';
import { Child } from '../app.interfaces'

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent{

  @Input() App : Child;

  constructor() { }

}
