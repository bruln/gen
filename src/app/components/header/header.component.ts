import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<boolean> = new Subject<boolean>()
  cartSize: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().pipe(takeUntil(this.unsubscribe$)).subscribe((cart)=> {
      this.cartSize = cart.items.length;
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

}
