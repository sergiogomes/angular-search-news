import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent, NavbarComponent } from './core/components';
import { HomeComponent } from './home';
import { ResultsComponent } from './search/components/results';
import { SearchComponent } from './search';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingComponent,
    HomeComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
