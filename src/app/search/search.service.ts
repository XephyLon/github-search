import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cat } from './models/cat.model';
import { SortOption } from './models/search-params.model';
import { SearchResponseModel } from './models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  protected urlPath = 'https://api.github.com/search/users?q=';
  private lastQuery = '';

  private _data$: Subject<SearchResponseModel> = new Subject();
  public data$ = this._data$.asObservable();

  constructor(private http: HttpClient) {}

  set data(response: SearchResponseModel) {
    this._data$.next(response);
  }

  set query(value: string) {
    this.lastQuery = value
  }

  get(
    perPage: number = 20,
    page: number = 1,
    order: 'asc' | 'desc' = 'desc',
    sort: SortOption = ''
  ) {
    const params: { params: HttpParams } = {
      params: new HttpParams()
        .set('q', this.lastQuery)
        .set('per_page', String(perPage))
        .set('page', String(page))
        .set('sort', sort)
        .set('order', order),
    };
    return this.http
      .get<SearchResponseModel>(this.urlPath, params)
      .subscribe({ next: (res) => (this.data = res) });
  }

  getRandomCat() {
    return this.http
      .get<Cat[]>('https://api.thecatapi.com/v1/images/search')
      .pipe(map((res) => res[0]));
  }
}
