import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { StateService } from 'src/app/shared/state/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public unsubscribe$: Subject<boolean> = new Subject<boolean>();
  public cartSize: number;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService
      .getCart()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((cart) => {
        this.cartSize = cart.items.length;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }
}
