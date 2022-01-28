import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Note } from './drag-drow-swap.component';

@Directive({
  selector: '[learnerDragDropSwap]',
})
export class DragDropSwapDirective {
  constructor() {}

  @HostBinding('attr.draggable')
  draggable = true;

  @Input('elemPosition')
  elemPosition!: number;

  @Input('list')
  list!: Note<string | number>[];

  @Output('returnUpdatedList') returnUpdatedList = new EventEmitter<
    Note<string | number>[]
  >();

  @HostListener('dragstart', ['$event'])
  onDragStart(e: DragEvent) {
    e.dataTransfer?.setData('text', this.elemPosition + '');
  }

  @HostListener('drop', ['$event'])
  onDrop(e: DragEvent) {
    e.preventDefault();
    let srcIndex = e.dataTransfer?.getData('text') as unknown as number;
    let desIndex = this.elemPosition as number;
    let clonedList = [...this.list];
    if (srcIndex !== desIndex) {
      clonedList.splice(desIndex, 1, this.list[srcIndex]);
      clonedList.splice(srcIndex, 1, this.list[desIndex]);
      this.returnUpdatedList.emit(clonedList);
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(e: DragEvent) {
    e.preventDefault();
  }
}
