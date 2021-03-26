import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Cat } from "./models/cat.model";
import { SortOption } from "./models/search-params.model";
import { SearchResponseModel } from './models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  protected urlPath = 'https://api.github.com/search/users?q=';

  constructor(private http: HttpClient) {}
  
  private _data$: Subject<SearchResponseModel> = new Subject()
  public data$ = this._data$.asObservable()

  private lastQuery = ''
  private sortBy: SortOption = ''

  set data(response: SearchResponseModel) {
    this._data$.next(response)
  }

  set query(value: string) {
    this.lastQuery = value
  }

  set sort(value: SortOption) {
    this.sortBy = value
  }

  get(
    perPage: number = 20,
    page: number = 1,
    order: 'asc' | 'desc' = 'desc',
    sort: SortOption = this.sortBy
  ) {
    return this.http.get<SearchResponseModel>(
      `${
        this.urlPath + this.lastQuery
      }&per_page=${perPage}&page=${page}&sort=${sort}&order=${order}`
    ).subscribe({ next: res => this.data = res})
  }

  getRandomCat() {
    return this.http.get<Cat[]>('https://api.thecatapi.com/v1/images/search').pipe(map(res => res[0]))
  }
}
