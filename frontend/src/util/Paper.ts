export default class Paper {
  constructor(
    public id: number,
    public title: string,
    public link: string,
    public author: string,
    public cited_by_number: number,
    public cited_by_link: string,
    public version_number: number,
    public version_link: string,
    public website: string,
    public related_articles_link: string
  ) {}
}
