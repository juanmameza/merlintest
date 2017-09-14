import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RootObject , Child } from './app.interfaces';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppServiceService {

  private URL = "https://www.reddit.com/reddits.json";

  constructor(private http: HttpClient) { } 

  getChildren() : Promise<Child[]> {
    // Make the HTTP request:
    return this.http.get<RootObject>(this.URL)
    .toPromise()
    .then(root => root.data.children as Child[]);
  }

}
