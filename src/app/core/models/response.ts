import { Article } from './article';

export class Response {
  status: string;
  totalResults: number;
  articles: Article[];
}
