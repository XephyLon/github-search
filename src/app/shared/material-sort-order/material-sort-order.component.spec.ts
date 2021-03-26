import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSortOrderComponent } from './material-sort-order.component';

describe('MaterialSortOrderComponent', () => {
  let component: MaterialSortOrderComponent;
  let fixture: ComponentFixture<MaterialSortOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSortOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSortOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
