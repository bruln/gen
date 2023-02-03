import { NgModule } from '@angular/core';
import { StateService } from './state/state.service';
import { AntDesignModule } from './ant-design/ant-design.module';

@NgModule({
  declarations: [],
  imports: [AntDesignModule],
  exports: [AntDesignModule],
  providers: [StateService],
})
export class SharedModule {}
