import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

import { Child } from '../app.interfaces'

import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : string[];
  selectedCategory : string;
  appsFromCategory: Child[];

  categoryLoading : boolean;

  constructor(
    private http: HttpClient,
    private appService: AppServiceService
  ) { }

  ngOnInit() {

    this.categories = [];

    this.appService.getChildren().then(children => {

      children.forEach( child => {

        // If category already exists, do not push.
        this.categories.indexOf(child.data.advertiser_category) === -1 ? this.categories.push(child.data.advertiser_category) : console.log("This item already exists");

      });

    })

  }

  showAppItemsOnSelection(category){
    
    this.selectedCategory = category;
    this.appsFromCategory = [];
    this. categoryLoading = true;

    this.appService.getChildren().then(children => {
      children.forEach( child => {

        console.log(child);
        console.log(category);
        if(child.data.advertiser_category == category){
          this.appsFromCategory.push(child)
        }

      });

      this.categoryLoading = false;

    })
  }


}
