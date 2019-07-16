import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxContainerComponent } from './box-container/box-container.component';
import { BoxItemComponent } from './box-item/box-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BoxItemComponent,
    BoxContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: BoxContainerComponent}])
  ],
})
export class BoxWorldModule { }
