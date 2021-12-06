import News from './news/news';
import Sources from './sources/sources';

import {NewsList} from './news/news';

import {SourcesObject} from './sources/sources';

interface DataNewsValue {
  articles: NewsList[];
  status: string;
  totalResults: number;
}

interface DataSourcesValue {
  sources: SourcesObject[];
  status: string;
}

export class AppView {

  news: News;
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: DataNewsValue) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: DataSourcesValue) {
    console.log(data)

    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
