import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from "./models/cat.model";
import { SortOption } from './models/search-params.model';
import { sortOptions } from "./search.data";
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  constructor(private ss: SearchService) {}

  data$ = this.ss.data$
  cat$: Observable<Cat> = new Observable()

  sortOptions = sortOptions


  setPagination(perPage: number, page: number) {
    this.ss.pagination$.next({ perPage, page })
  }

  setOrder(isAsc: boolean) {
    this.ss.order$.next(isAsc ? 'asc' : 'desc')
  }

  sortBy(sortOption: SortOption) {
    this.ss.sort$.next(sortOption)
  }
  

  ngOnInit() {
    this.cat$ = this.ss.getRandomCat()
  }
}
