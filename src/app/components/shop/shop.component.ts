import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ItemService } from 'src/app/shared/services/item/item.service';
import { Product } from 'src/app/shared/models/product.model';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  data: Product[];
  sortOptions = new Set(['Price Ascending', 'Price Descending']);
  currentSortOption: string = 'Rating'
  unsubscribe$: Subject<boolean> = new Subject<boolean>()

  constructor( private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().pipe(takeUntil(this.unsubscribe$)).subscribe( items => {
      this.data = items;
    })
  }

  sort(option: string){
  switch(option){
    case('Price Ascending'):
      this.data.sort((a,b)=> a.price - b.price)
    break;
    case('Price Descending'):
      this.data.sort((a,b)=> b.price - a.price)
    break;
    default:
      this.data.sort((a,b)=> b.rating - a.rating)
  }

  this.sortOptions.add(this.currentSortOption);
  this.currentSortOption = option;
  this.sortOptions.delete(option);
  }
}
