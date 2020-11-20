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

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=0b2fc2f4a13140c69ea2ccf1b64e799f

  public search(q: string, page: number, sortBy: string = 'publishedAt'): void {
    this.base.get(`/v2/everything?q=${q}&sortBy=${sortBy}&page=${page}`).then(
      (resp: Response) => {
        console.log(resp);
        this.items = resp.articles;
        // this.repositoriesData.incomplete_results = resp.incomplete_results;
        // this.repositoriesData.total_count = this.limitResults(resp.total_count);
        // this.repositoriesData.items = resp.items;
        // this.repositoriesData.page = page;
      },
      (err) => {
        // this.showError(err.statusText);
        // this.repositoriesData.error = err;
      }
    );
  }
}
