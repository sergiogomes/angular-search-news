import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

import { QueryParams } from '../core/models';
import { SearchService } from './services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  public q: string;
  public page: number;

  private searchingSub: Subscription;
  private routeParamsSub: Subscription;

  constructor(public service: SearchService, private route: ActivatedRoute) {
    this.searchingSub = this.service.eventSearchChanged.subscribe((params) => {
      this.mapAndSearch(params);
    });
  }

  ngOnInit(): void {
    this.routeParamsSub = this.route.queryParams.subscribe((params) => {
      this.mapAndSearch(params);
    });
  }

  public mapAndSearch(params: QueryParams | any): void {
    this.q = params.q;
    this.page = Number(params.page);

    this.service.search(this.q, this.page);
    this.updateURL({ q: this.q, page: this.page });
  }

  public updateURL(p: QueryParams): void {
    window.history.replaceState(
      {},
      '',
      `search?q=${p.q}&page=${p.page}`
    );
  }

  ngOnDestroy(): void {
    this.searchingSub.unsubscribe();
    this.routeParamsSub.unsubscribe();
  }
}
