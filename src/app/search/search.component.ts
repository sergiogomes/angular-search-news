import { Component, OnInit } from '@angular/core';

import { QueryParams } from '../core/models';
import { SearchService } from './services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public q: string;
  public page: number;

  constructor(private service: SearchService) { }

  ngOnInit(): void {
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

}
