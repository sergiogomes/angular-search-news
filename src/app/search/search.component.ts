import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  public sortForm = new FormGroup({
    sort: new FormControl(),
  });

  private searchingSub: Subscription;
  private routeParamsSub: Subscription;
  private sortChangeSub: Subscription;

  constructor(public service: SearchService, private route: ActivatedRoute) {
    this.searchingSub = this.service.eventSearchChanged.subscribe((params) => {
      this.mapAndSearch(params);
    });
  }

  ngOnInit(): void {
    this.routeParamsSub = this.route.queryParams.subscribe((params) => {
      this.mapAndSearch(params);
    });
    this.onChanges();
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

  public onSort(): void {
    this.service.displayRadio = true;
    this.sortForm.patchValue({ sort: 'ascending' });
  }

  onChanges(): void {
    this.sortChangeSub = this.sortForm.get('sort').valueChanges.subscribe(sort => this.service.sort(sort));
  }

  ngOnDestroy(): void {
    this.searchingSub.unsubscribe();
    this.routeParamsSub.unsubscribe();
    this.sortChangeSub.unsubscribe();
  }
}
