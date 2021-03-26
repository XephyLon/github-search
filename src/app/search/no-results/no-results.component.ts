import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CatModel } from "../models/cat.model";

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoResultsComponent {
  @Input() imgDataSource!: CatModel

}
