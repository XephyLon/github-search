import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Cat } from "../models/cat.model";

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoResultsComponent {
  @Input() imgDataSource!: Cat

}
