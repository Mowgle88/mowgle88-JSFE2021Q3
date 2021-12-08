
export type Callback<T> = (data: T) => void;

export interface SourcesObject {
  id: string;
  name: string;
}

export interface NewsList {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: SourcesObject;
  title: string;
  url: string;
  urlToImage: string;
}

export interface IData {
  sources: Array<SourcesObject>;
  articles: Array<NewsList>;
}
