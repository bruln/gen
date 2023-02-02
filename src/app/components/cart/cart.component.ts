import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { Subject, takeUntil } from 'rxjs';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartItem } from 'src/app/shared/models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cart: Cart;
  unsubscribe$: Subject<boolean> = new Subject<boolean>()

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().pipe(takeUntil(this.unsubscribe$)).subscribe((cart) => {
      this.cart = cart;
    })
  }

  addToCart(item: CartItem){
    this.cartService.addToCart(item, true)
  }

  removeFromCart(item: CartItem){
    this.cartService.removeFromCart(item)
  }

  ngOnDestroy(): void {
      this.unsubscribe$.next(true);
      this.unsubscribe$.unsubscribe()
  }

}
