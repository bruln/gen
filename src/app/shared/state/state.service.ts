import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, map } from 'rxjs';
import { SHOES } from '../data/shoes';

import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private cart = new BehaviorSubject<Cart>({ items: [], totalAmount: 0 });
  public cart$: Observable<Cart> = this.cart.asObservable();

  private items = new BehaviorSubject<Product[]>(SHOES);
  public items$: Observable<Product[]> = this.items.asObservable();

  // Item Methods
  public getItems(): Observable<Product[]> {
    return this.items$.pipe(
      map((items) =>
        items.sort((a, b) => {
          if (a.rating > b.rating) {
            return -1;
          } else {
            return 1;
          }
        })
      )
    );
  }

  public getItem(id: number): Observable<Product[]> {
    return this.items$.pipe(
      map((items) => {
        return items.filter((item) => item.id == id);
      })
    );
  }

  // Cart Methods
  public getCart(): Observable<Cart> {
    return this.cart$;
  }

  public addToCart(newItem: CartItem, IncrementOne?: boolean): void {
    const cart = this.cart.getValue();
    let cartItems = cart.items;
    let cartValue = cart.totalAmount;
    const index = cartItems.findIndex(
      (item) =>
        item.name == newItem.name &&
        item.color.color == newItem.color.color &&
        item.size == newItem.size
    );

    if (index >= 0) {
      let updatedItem = cartItems[index];
      if (IncrementOne) {
        updatedItem.quantity += 1;
      } else {
        updatedItem.quantity += newItem.quantity;
      }
    } else {
      cartItems.push(newItem);
    }
    if (IncrementOne) {
      cartValue += newItem.price;
    } else {
      cartValue += newItem.price * newItem.quantity;
    }
    this.cart.next({ items: cartItems, totalAmount: cartValue });
  }

  public removeFromCart(itemToRemove: CartItem): void {
    const cart = this.cart.getValue();
    let cartItems = cart.items;
    let cartValue = cart.totalAmount;
    const index = cartItems.findIndex(
      (item) =>
        item.name == itemToRemove.name &&
        item.color.color == itemToRemove.color.color &&
        item.size == itemToRemove.size
    );
    if (cartItems[index].quantity == 1) {
      cartItems.splice(index, 1);
    } else {
      cartItems[index].quantity -= 1;
    }
    cartValue -= itemToRemove.price;
    this.cart.next({ items: cartItems, totalAmount: cartValue });
  }
}
