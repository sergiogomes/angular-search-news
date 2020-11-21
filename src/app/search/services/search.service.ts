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

  public searchChanged$: Subject<QueryParams> = new Subject<QueryParams>();
  get eventSearchChanged(): Observable<any> {
    return this.searchChanged$.asObservable();
  }

  constructor(private base: BaseService) {}

  public search(q: string, page: number, sortBy: string = 'publishedAt'): void {
    this.base.get(`/v2/everything?q=${q}&sortBy=${sortBy}&page=${page}`).then(
      (resp: Response) => {
        this.items = resp.articles;
      }
    );
  }
}
