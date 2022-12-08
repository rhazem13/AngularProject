import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';
import { LogginService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  constructor(
    private shoppingListService: ShoppingListService,
    private loggingService: LogginService
  ) {}
  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe();
  }
  private idChangeSub: Subscription;

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.idChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.loggingService.printlog('hello from shoppinglist ngoninit');
  }
  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
