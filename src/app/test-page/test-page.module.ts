import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DemoContainerComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: DemoContainerComponent}])
  ]
})
export class TestPageModule { }
