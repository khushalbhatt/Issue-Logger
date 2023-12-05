import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _userUrl="http://localhost:3000/users";
  private httpOptions = {
     headers:new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }; 

  constructor(private _http:HttpClient) { }

   getUsers(){
    return this._http.get(this._userUrl);
   }

   addUser(data:any){
 const id=nanoid(10);
 data.id=id;
 console.log("data is "+data.descreption+data.severity+data.status);
   return this._http.post(this._userUrl,data,this.httpOptions);
  }
}
