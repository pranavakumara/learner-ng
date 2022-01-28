import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDrowSwapComponent } from './drag-drow-swap.component';

describe('DragDrowSwapComponent', () => {
  let component: DragDrowSwapComponent;
  let fixture: ComponentFixture<DragDrowSwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDrowSwapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDrowSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
