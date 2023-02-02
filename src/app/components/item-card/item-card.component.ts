import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input()
  item: Product;
  mainImage: string; 
  constructor() { }
  ngOnInit(): void {
    this.mainImage = this.item.colorOptions[0].image
  }
}
