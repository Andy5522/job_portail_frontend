import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  apiUrl="http://localhost:3000/users";
  createUrl="http://localhost:3000/user";

  constructor(private http:HttpClient) { }

//Get all data observe.....
  getAllUsers():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

//create data
createData(data:any):Observable<any>{
  console.log(data,'Data Created')
  return this.http.post(`${this.createUrl}`,data);
}
//delete data...
deleteData(id:any):Observable<any>{
  let ids = id;
  return this.http.delete(`${this.createUrl}/${ids}`);
}

//update Data...
updateData(data:any, id:any):Observable<any>{
  let ids = id;
  return this.http.get(`${this.createUrl}/${ids}`,data);
}
//get single date
getSingleData(id:any):Observable<any>{
  let ids = id;
  return this.http.get(`${this.createUrl}/${ids}`);
}

}
