import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { Issue } from './issues/issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private _issuesUrl="http://localhost:3000/issues";
  private _islogged="http://localhost:3000/login";
  private httpOptions = {
     headers:new HttpHeaders({
       'Content-Type': 'application/json'
     })
  };
  public islog=false;
  public isloog="logIn";

  constructor(private _http:HttpClient) { }

  getIssues(){
       return this._http.get(this._issuesUrl);
  }
  IsLoggedin(){
        // return this._http.get(this._islogged);
        return this.islog;
  }
  IsLoggedIn(){
     return this._http.get(this._islogged);
}
  hasloggedin(x:boolean)
  {
       const edit = `${this._islogged}/${1}`;
       const updated = {
        "islogged":"true",
        "message":"Log off"
       }
      this._http.put(edit,updated,this.httpOptions);
      // this.isloog="Logged In";
      // console.log("isloog"+this.isloog);
      this.islog=true;
      return this.islog;
  }
  hasloggedIn(x:boolean)
  {
       const edit = `${this._islogged}/${1}`;
       const updated = {
        "islogged":"true",
        "message":"Log off"
       }
      return this._http.put(edit,updated,this.httpOptions);
  }
  hasloggedout(x:boolean)
  {
    // const edit = `${this._islogged}/${1}`;
    // const updated = {
    //  "islogged":"false",
    //  "message":"Log In"
    // }
    // return this._http.put(edit,updated,this.httpOptions);
    this.isloog="Log In";
     this.islog=false;
     return this.islog;
  }
  hasloggedOut(x:boolean)
  {
     const edit = `${this._islogged}/${1}`;
     const updated = {
      "islogged":"false",
      "message":"Log In"
     }
     return this._http.put(edit,updated,this.httpOptions);
  }
  addIssue(data:any){
    const id=nanoid(10);
    data.id=id;
    console.log("data is "+data.descreption+data.severity+data.status);
      return this._http.post(this._issuesUrl,data,this.httpOptions);
  }
  deleteIssue(issueid: string) {
    const deleteissueURL = `${this._issuesUrl}/${issueid}`;
    return this._http.delete(deleteissueURL);
}
   incrementcount(obj:Issue)
   {
    const editissueURL = `${this._issuesUrl}/${obj.id}`;
    //console.log(obj.count);
    //obj.count=obj.count+1;
    console.log(obj.count);
    return this._http.put(editissueURL,obj,this.httpOptions);
   }
   editIssue(obj:Issue)
   {
    const editissueURL = `${this._issuesUrl}/${obj.id}`;
     return this._http.put(editissueURL,obj,this.httpOptions);
   }
}
