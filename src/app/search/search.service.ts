import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject, combineLatest, forkJoin, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Cat } from './models/cat.model';
import { CombinedResponseData, SearchResponse, User } from './models/search-response.model';
import { defaultResponse } from "./search.data";

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  protected urlPath = 'https://api.github.com/search/users';

  searchQuery$ = new Subject<string>();
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
      catchError(() => of(defaultResponse)),
      switchMap((items) => {
        return items.total_count > 0
        ? forkJoin(items.items?.map((item) => this.http.get<User>(item.url)))
        .pipe(map((data) => ({ ...items, items: data })))
        : of(defaultResponse as CombinedResponseData)
      }),
      catchError((err: HttpErrorResponse) => {
        err.status === 403
          ? this.snackbar.open('Please wait an hour before the next search attempt.')._dismissAfter(5000)
          : this.snackbar.open('Something went wrong. Please try again shortly')._dismissAfter(5000)
        
          return of(defaultResponse as CombinedResponseData)
      })
    );
  }))

  getRandomCat() {
    return this.http
      .get<Cat[]>('https://api.thecatapi.com/v1/images/search')
      .pipe(map((res) => res[0]));
  }
}
