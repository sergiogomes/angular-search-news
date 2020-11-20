import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public searchText: string;

  constructor() { }

  ngOnInit(): void {
    // Subscribe to query string changes to update the search input value
  }

  // Change to Search screen
  public onSearch(): void {
    console.log(this.searchText);
  }

  ngOnDestroy(): void {
    // Unsubscribe
  }
}
