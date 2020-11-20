import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  @Input() title: string;
  @Input() description: string;
  @Input() author: string;
  @Input() urlToImage: string;
  @Input() url: string;
  @Input() publishedAt: string;

  constructor() { }

}
