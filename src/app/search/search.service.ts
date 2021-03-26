import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Cat } from './models/cat.model';
import { SearchResponse, User } from './models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  protected urlPath = 'https://api.github.com/search/users';

  searchQuery$ = new BehaviorSubject('Xephy');
  pagination$ = new BehaviorSubject({ perPage: 20, page: 1 });
  sort$ = new BehaviorSubject('');
  order$ = new BehaviorSubject('asc')


  data$ = combineLatest([
    this.searchQuery$.pipe(distinctUntilChanged()),
    this.pagination$,
    this.sort$,
    this.order$,
  ]).pipe(switchMap(([searchQuery, { perPage, page }, sort, order]) => {
    
    const params: { params: HttpParams } = {
      params: new HttpParams()
        .set('q', searchQuery)
        .set('per_page', String(perPage))
        .set('page', String(page))
        .set('sort', sort)
        .set('order', order),
    };

    return this.http.get<SearchResponse>(this.urlPath, params).pipe(
      switchMap((items) => {
        return forkJoin(
          items.items?.map((item) => {
            return this.http.get<User>(item.url);
          })
        ).pipe(map((data) => ({ ...items, items: data })));
      })
    );
  }))

  getRandomCat() {
    return this.http
      .get<Cat[]>('https://api.thecatapi.com/v1/images/search')
      .pipe(map((res) => res[0]));
  }
}
