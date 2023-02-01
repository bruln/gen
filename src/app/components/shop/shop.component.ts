import { Component, OnInit } from '@angular/core';
import { SHOES } from 'src/app/shared/data/shoes';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  data = SHOES;
  constructor() { }

  ngOnInit(): void {
  }

  log(txt: string){
    console.log(txt)
  }

}
