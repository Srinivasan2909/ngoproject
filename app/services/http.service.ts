import { Ngo } from './../shared/ngo.model';
import { Request } from './../shared/request.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  createNgo(ngo: Ngo){
    return this.http.post("https://localhost:44393/api/register", ngo); 
  }

  loginNgo(ngo: Ngo){
    return this.http.post("https://localhost:44393/api/login", ngo);
  }

  createRequests(req:Request){
    return this.http.post("https://localhost:44393/api/requests", req);
  }
  getRequestsbyID(ngo: Ngo){
    console.log(ngo);
    return this.http.post("https://localhost:44393/api/ngo",ngo);
  }
  getDonations(ele: Request){
    console.log(ele);
    return this.http.post("https://localhost:44393/api/donation", ele);
  }
}