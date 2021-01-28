import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public searchDermatologists(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('firstName', data["firstName"])
                               .set('lastName', data["lastName"])
    } 
    return this.http.get(`http://localhost:8080/dermatologists/search`, queryParams);
  }

  public searchPharmacists(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('firstName', data["firstName"])
                               .set('lastName', data["lastName"])
    } 
    return this.http.get(`http://localhost:8080/pharmacists/search`, queryParams);
  }

  public searchPharmacyMedicaments(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('name', data["name"])
                               .set('type', data["type"])
    } 
    return this.http.get(`http://localhost:8080/pharmacy-medicaments/search`, queryParams);
  }

}
