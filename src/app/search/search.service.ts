import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Cat } from './models/cat.model';
import { SortOption } from './models/search-params.model';
import { SearchResponse, User } from './models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  protected urlPath = 'https://api.github.com/search/users?q=';
  private lastQuery = '';

  private _data$: Subject<SearchResponse> = new Subject();
  public data$ = this._data$.asObservable();

  constructor(private http: HttpClient) {}

  set data(response: SearchResponse) {
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
      .get<SearchResponse>(this.urlPath, params).pipe(
        switchMap(items => {
          return forkJoin(items.items?.map(item => {
            return this.http.get<User>(item.url)
          }))
          .pipe(map(data => ({...items, items: data})))
        })
      )
  }

  getRandomCat() {
    return this.http
      .get<Cat[]>('https://api.thecatapi.com/v1/images/search')
      .pipe(map((res) => res[0]));
  }
}
