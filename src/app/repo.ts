export class Repo {
    constructor(public name:string, public description:string, public created_at:Date, public forks:number, public watchers_count:number, public html_url:string, public language:string) {}
}
