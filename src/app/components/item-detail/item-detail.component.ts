import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import {Product} from '../../shared/models/product.model'
import { ColorOption } from 'src/app/shared/models/product-image.model';
import { SizesEnum } from 'src/app/shared/enums/sizes.enum';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ItemService } from 'src/app/shared/services/item/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  itemId: number;
  item: Product;
  selectedColor: ColorOption;
  selectedSize: SizesEnum;
  selectedQuantity: number = 1;
  unsubscribe$: Subject<boolean> = new Subject<boolean>()
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private cartService: CartService, 
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe(params => {
      this.itemId = parseInt(params.get('id'))
    })

    this.itemService.getItem(this.itemId).pipe(takeUntil(this.unsubscribe$)).subscribe(item => {
      this.item = item[0];
      this.selectedColor = this.item.colorOptions[0]
    })
  }
  
  setColor(color){
    this.selectedColor = color;
  }

  addToCart(){
    this.cartService.addToCart({
      name: this.item.name, 
      color: this.selectedColor, 
      quantity: this.selectedQuantity, 
      size: this.selectedSize, 
      price: this.item.price})
    
  }



  ngOnDestroy(): void {
      this.unsubscribe$.next(true);
      this.unsubscribe$.unsubscribe()
  }
   
}
