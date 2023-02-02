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
  sortOptions = new Set(['Price Ascending', 'Price Descending', 'A-Z', 'Z-A']);
  currentSortOption: string = 'Rating'
  unsubscribe$: Subject<boolean> = new Subject<boolean>()

  constructor( private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getSortedItems(this.currentSortOption).pipe(takeUntil(this.unsubscribe$)).subscribe( items => {
      this.data = items;
    })
  }

  sort(option: string){
  this.itemService.getSortedItems(option);
  this.sortOptions.add(this.currentSortOption);
  this.currentSortOption = option;
  this.sortOptions.delete(option);
  }
}
