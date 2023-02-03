import { NgModule } from '@angular/core';
import { StateService } from './state/state.service';
import { AntDesignModule } from './ant-design/ant-design.module';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [ItemCardComponent],
  imports: [AntDesignModule, RouterModule, CommonModule],
  exports: [ItemCardComponent, AntDesignModule],
  providers: [StateService],
})
export class SharedModule {}
