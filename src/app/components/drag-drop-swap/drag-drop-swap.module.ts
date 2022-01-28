import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDrowSwapComponent } from './drag-drow-swap.component';
import { RouterModule } from '@angular/router';
import { DragDropSwapDirective } from './drag-drop-swap.directive';

@NgModule({
  declarations: [DragDrowSwapComponent, DragDropSwapDirective],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DragDrowSwapComponent,
      },
    ]),
  ],
})
export class DragDropSwapModule {}
