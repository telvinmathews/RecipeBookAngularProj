import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is the description', 'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221__340.jpg' ),
    new Recipe('A Test Recipe', 'this is the description', 'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221__340.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
