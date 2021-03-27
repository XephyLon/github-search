import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { Spectator, createComponentFactory, byText } from '@ngneat/spectator/jest';
import { MaterialSortOrderComponent } from "./material-sort-order.component";

describe('MaterialSortOrderComponent', () => {
  let spectator: Spectator<MaterialSortOrderComponent>
  const createComponent = createComponentFactory({
    component: MaterialSortOrderComponent,
    imports: [MatButtonModule, MatIconModule]
  })

  beforeEach(() => spectator = createComponent())

  it('Should render element', () => {
    expect(spectator.component).toBeTruthy()
  })

  it('Should have a .mat-sort-order class by default', () => {
    expect(spectator.element).toHaveClass('mat-sort-order')
  })

  it('Should have Ascending set by default', () => {
    expect(spectator.component.isAsc).toBeTruthy()
  })

  it('should fire an event when value changes', () => {
    let output;
    spectator.output('valueChange').subscribe(res => output = res);

    spectator.component.setAsc(false);
    expect(output).toBeFalsy();
  })

  it('Should add mat-primary class on active option', () => {
    expect(spectator.query('.asc')).toHaveClass('mat-primary')

    spectator.component.setAsc(false);
    spectator.detectChanges();
    expect(spectator.query('.desc')).toHaveClass('mat-primary')
  })
})