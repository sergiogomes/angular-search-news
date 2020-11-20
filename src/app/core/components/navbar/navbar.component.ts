import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QueryParams } from '../../models/query-params.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public searchText: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Subscribe to query string changes to update the search input value
  }

  // Change to Search screen
  public onSearch(): void {
    const objQueryParams: QueryParams = {
      q: this.searchText,
      page: 1
    }

    if (this.searchText) {
      this.router.navigate(['/search'], {
        queryParams: objQueryParams
      });
    }
  }

  ngOnDestroy(): void {
    // Unsubscribe
  }
}
