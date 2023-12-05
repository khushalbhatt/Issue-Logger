export interface Issue {
    id:string;
    descreption?: string;
    severity?: string;
    status?: string;
    createddate?:Date;
    resolveddate?:Date;
    count:number;
}
