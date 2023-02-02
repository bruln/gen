import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { Subject, takeUntil } from 'rxjs';
import { Cart } from 'src/app/shared/models/cart.model';

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
      console.log(this.cart);
    })
  }

  ngOnDestroy(): void {
      this.unsubscribe$.next(true);
      this.unsubscribe$.unsubscribe()
  }

}
