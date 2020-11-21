import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

import { Article, QueryParams, Response } from 'src/app/core/models';
import { BaseService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public items: Article[];
  public displaySort: boolean;
  public displayRadio: boolean;

  public searchChanged$: Subject<QueryParams> = new Subject<QueryParams>();
  get eventSearchChanged(): Observable<any> {
    return this.searchChanged$.asObservable();
  }

  constructor(private base: BaseService) {}

  public search(q: string, page: number, sortBy: string = 'publishedAt'): void {
    this.displaySort = false;
    this.displayRadio = false;
    this.items = [];
    this.base.get(`/v2/everything?q=${q}&sortBy=${sortBy}&page=${page}`).then(
      (resp: Response) => {
        this.items = resp.articles;
        this.displaySort = true;
      }
    );
  }

  public sort(sort: string = 'ascending'): void {
    switch (sort) {
      case 'ascending':
        this.items = this.items.sort((a, b) => {
          if (a.title < b.title) { return -1; }
          if (a.title > b.title) { return 1; }
          return 0;
        });
        break;
      case 'descending':
        this.items = this.items.sort((a, b) => {
          if (a.title > b.title) { return -1; }
          if (a.title < b.title) { return 1; }
          return 0;
        });
        break;
    }
  }
}
