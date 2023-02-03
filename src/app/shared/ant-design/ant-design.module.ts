import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  exports:[
    NzDropDownModule,
    NzLayoutModule,
    NzCardModule,
    NzButtonModule,
    NzRadioModule,
    NzInputNumberModule,
    NzListModule,
    NzBadgeModule,
  ]
})
export class AntDesignModule { }
