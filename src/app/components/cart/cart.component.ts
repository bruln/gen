import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from 'src/app/shared/state/state.service';
import { Subject, takeUntil } from 'rxjs';
import { Cart } from 'src/app/shared/models/cart.model';
import { CartItem } from 'src/app/shared/models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  public cart: Cart;
  public unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService
      .getCart()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((cart) => {
        this.cart = cart;
      });
  }

  addToCart(item: CartItem) {
    this.stateService.addToCart(item, true);
  }

  removeFromCart(item: CartItem) {
    this.stateService.removeFromCart(item);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }
}
