import { Headline } from "../headlines/headline";

export class Content {
    id!:number;
    title!:string;
    place!:string;
    comments!:string;
    startDate!:Date;
    endDate!:Date;
    status!:boolean;
    headline!:Headline;
}

