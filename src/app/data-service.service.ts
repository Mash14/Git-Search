import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  getUsers(searchName:string):Observable<any> {

    return this.http.get<any>(environment.apiUrl + '/' + searchName); 
  }

  getRepos(searchName:string):Observable<any> {

    return this.http.get<any>(environment.apiUrl + '/' + searchName + '/repos?order=created&sort=asc?access_token=' + environment.access_token)
  }
}
