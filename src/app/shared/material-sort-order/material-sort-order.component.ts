import { Component, HostBinding, Output } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mat-sort-order',
  templateUrl: './material-sort-order.component.html',
  styleUrls: ['./material-sort-order.component.scss']
})
export class MaterialSortOrderComponent {
  @HostBinding('class') rootClass = 'mat-sort-order'

  // @Output() valueChange = new EventEmitter()

  isAsc = true

  setAsc(val: boolean) {
    this.isAsc = val
  }

  constructor() { }
}
