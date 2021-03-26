import { Component, EventEmitter, HostBinding, Output } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mat-sort-order',
  templateUrl: './material-sort-order.component.html',
  styleUrls: ['./material-sort-order.component.scss']
})
export class MaterialSortOrderComponent {
  @HostBinding('class') rootClass = 'mat-sort-order'

  /**
   * Emits a boolean when a user click on either of the buttons that
   * corresponds to whether or not the sort order is ascending.
   * 
   * True = ascending
   */
  @Output() valueChange = new EventEmitter<boolean>()

  isAsc = true

  setAsc(val: boolean) {
    this.isAsc = val
    return this.valueChange.emit(val)
  }



  constructor() { }
}
