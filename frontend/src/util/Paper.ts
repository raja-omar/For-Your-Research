export default class Paper {
    id: number;
    title: string;
    link: string;

    constructor(id: number, title: string, link: string) {
        this.id = id;
        this.title = title;
        this.link = link;
    }
}