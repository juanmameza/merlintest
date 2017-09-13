import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RootObject , Child } from './app-list.interfaces';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  private URL = 'https://www.reddit.com/reddits.json';
  
  private results : Child[];

  private selectedApp : Child;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    
    // Make the HTTP request:
    this.http.get<RootObject>(this.URL).subscribe(root => {
      
      // Read the result field from the JSON response.
      this.results = root.data.children;
    
      console.log(root.data.children);

    });

  }

  selectApp(app: Child) : void {
    this.selectedApp = app;
  }

}
