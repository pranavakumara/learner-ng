import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learner-drag-drow-swap',
  templateUrl: './drag-drow-swap.component.html',
  styleUrls: ['./drag-drow-swap.component.scss'],
})
export class DragDrowSwapComponent implements OnInit {
  notes: Note<string | number>[] = [
    {
      name: 1,
    },
    {
      name: 'note 2',
    },
    {
      name: 'note 3',
    },
    {
      name: 'note 4',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  returnUpdatedList(data: Note<string | number>[]) {
    this.notes = data;
  }
}
export interface Note<T> {
  name: T;
}
