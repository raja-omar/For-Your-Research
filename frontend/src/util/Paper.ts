export default class Paper {
  id: number;
  title: string;
  link: string;
  relevance: number;
  cited_by_number: number;
  cited_by_link: string;
  versions_link: string;
  versions_number: string;
  related_articles: string;

  constructor(
    id: number,
    title: string,
    link: string,
    relevance: number,
    cited_by_number: number,
    cited_by_link: string,
    versions_link: string,
    versions_number: string,
    related_articles: string
  ) {
    this.id = id;
    this.title = title;
    this.link = link;
    this.relevance = relevance;
    this.cited_by_number = cited_by_number;
    this.cited_by_link = cited_by_link;
    this.versions_link = versions_link;
    this.versions_number = versions_number;
    this.related_articles = related_articles;
  }
}
