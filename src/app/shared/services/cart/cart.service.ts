import { Injectable } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { Cart } from '../../models/cart.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private subject = new BehaviorSubject<Cart>({items: [], totalAmount: 0})
  private cart$: Observable<Cart> = this.subject.asObservable();

  constructor() { }

  getCart(): Observable<Cart> {
    return this.cart$
  }

  addToCart(newItem: CartItem) {
    const cart = this.subject.getValue()
    let cartItems = cart.items;
    let cartValue = cart.totalAmount;
    const index = cartItems.findIndex( item => 
      item.name == newItem.name && 
      item.color.color == newItem.color.color && 
      item.size == newItem.size )

    if (index >= 0){
      let updatedItem = cartItems[index]
      updatedItem.quantity += 1;
      
    }else{
      cartItems.push(newItem)
    }
    cartValue += (newItem.price *newItem.quantity)
    this.subject.next({items:cartItems, totalAmount:cartValue});
  }

  removeFromCart(itemToRemove: CartItem) {
    const cart = this.subject.getValue();
    let cartItems = cart.items;
    let cartValue = cart.totalAmount;
    const index = cartItems.findIndex( item => 
      item.name == itemToRemove.name && 
      item.color.color == itemToRemove.color.color && 
      item.size == itemToRemove.size )

    if (cartItems[index].quantity > 1){
      cartItems[index].quantity -= 1;
    }else{
      cartItems = cartItems.splice(index,1)
    }
    cartValue -= itemToRemove.price;
  }
}
