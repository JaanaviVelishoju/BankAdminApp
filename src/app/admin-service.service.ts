import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { EmpInfo } from './emp-info';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private _http:HttpClient) { }
  public baseUrl:string='';
  headers=new HttpHeaders()
  .set('Access-Control-Allow-Origin','*')
 .set('contant-type','application/json');


  public GetEmployees():Observable<EmpInfo[]>{
    return this._http.get<EmpInfo[]>('http://localhost:8080/emp',{headers:this.headers});
  }
   public GetEmployee(empid:number):Observable<EmpInfo>{
    return this._http.get<EmpInfo>('http://localhost:8080/emp'+'/'+empid);
   }

   public InsertEmployee(emp:EmpInfo):Observable<any>{
    return this._http.post<EmpInfo>('http://localhost:8080/emp',emp,{headers:this.headers});
   }

   public UpdateEmployee(emp:EmpInfo,empid:number):Observable<any>{
    return this._http.put<EmpInfo>('http://localhost:8080/emp'+'/'+empid,emp);
   }

   public Delete(empid:number):Observable<any>{
    return this._http.delete<EmpInfo>('http://localhost:8080/emp'+'/'+empid);
   }
}
