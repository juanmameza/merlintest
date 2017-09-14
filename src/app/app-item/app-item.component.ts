import { Component, OnInit, Input } from '@angular/core';

import { Child } from '../app.interfaces'

@Component({
  selector: 'app-app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.css']
})
export class AppItemComponent implements OnInit {

  @Input() CategoryApps : Child[];

  constructor() { }

  ngOnInit() {
  }

}
