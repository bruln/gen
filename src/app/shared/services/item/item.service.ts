import { Injectable } from '@angular/core';
import { SHOES } from '../../data/shoes';
import { Product } from '../../models/product.model';
import { BehaviorSubject, Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private subject = new BehaviorSubject<Product[]>(SHOES)
  private items$: Observable<Product[]> = this.subject.asObservable()


  constructor() { }

  getSortedItems(sortBy: string) {
    switch(sortBy) {
      case('Price Ascending'):
        return this.items$.pipe(map(items => items.sort((a,b) => {
          if (a.price > b.price){
            return 1
          }  else {
            return -1
          }
        })))
        
      case('Price Descending'):
        return this.items$.pipe(map(items => items.sort((a,b) => {
          if (a.price > b.price){
            console.log('a');
            
            return -1
          }  else {
            return 1
          }
        })))

      default:
        return this.items$.pipe(map(items => items.sort((a,b) => {
          if (a.rating > b.rating){
            return -1
          }  else {
            return 1
          }
        })))

    }
  }

  getItem(id: number){
    return this.items$.pipe(map(items => {
      return items.filter(item => item.id == id)
    }))
  }

}
