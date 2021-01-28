import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private http: HttpClient) { }

  public updatePharmacy(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/pharmacies/${id}`, body);
  }


  public getPharmacy(id): Observable<any> {
    return this.http.get(`http://localhost:8080/pharmacies/${id}`);
  }
}