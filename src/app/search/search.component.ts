import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from "./models/cat.model";
import { SortOption } from './models/search-params.model';
import { ResponseData } from "./models/search-response.model";
import { sortOptions } from "./search.data";
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  data$: Observable<ResponseData> = new Observable();
  cat$: Observable<Cat> = new Observable()

  sortOptions = sortOptions

  perPage = 20
  page = 1
  order: 'asc' | 'desc' = 'asc'
  sort: SortOption = ''

  constructor(private ss: SearchService) {}

  getData() {
    return this.ss.get(
      this.perPage,
      this.page,
      this.order,
      this.sort,
    );
  }

  setPagination(perPage: number, page: number) {
    this.perPage = perPage
    this.page = page
  }

  setOrder(isAsc: boolean) {
    this.order = isAsc ? 'asc' : 'desc'
  }

  sortBy(sortOption: SortOption) {
    this.sort = sortOption
  }
  

  ngOnInit() {
    this.data$ = this.ss.get(
      this.perPage,
      this.page,
      this.order,
      this.sort,
    );
    this.cat$ = this.ss.getRandomCat()
  }
}
