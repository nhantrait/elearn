export class comment{
    public id_post : string;
    public name : string;
    public created : string;
    public id_comment : string
    constructor(name : string, created : string){
        this.name = name;
        this.created = created;
    }
}