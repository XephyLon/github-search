import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from "./models/cat.model";
import { SearchParams } from './models/search-params.model';
import { SearchResponseModel } from './models/search-response.model';
import { sortOptions } from "./search.data";
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  data$: Observable<SearchResponseModel> = new Observable();
  cat$: Observable<Cat> = new Observable()

  sortOptions = sortOptions

  constructor(private ss: SearchService) {}

  getData(params?: SearchParams) {
    return this.ss.get(
      params?.perPage,
      params?.page,
      params?.order,
      params?.sort
    );
  }

  

  ngOnInit() {
    this.data$ = this.ss.data$
    this.cat$ = this.ss.getRandomCat()
  }
}
