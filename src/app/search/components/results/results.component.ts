import { Component, Input } from '@angular/core';

import { SearchService } from '../../services';
import { Article } from 'src/app/core';

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

  constructor(private service: SearchService) { }

  public openModal(): void {
    const article: Article = {
      title: this.title,
      description: this.description,
      author: this.author,
      urlToImage: this.urlToImage,
      url: this.url,
      publishedAt: this.publishedAt,
      content: '',
      source: {id: '', name: ''}
    };

    this.service.modalHandle$.next({open: true, article});
  }
}
