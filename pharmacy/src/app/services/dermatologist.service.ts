import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DermatologistService {

  constructor(private http: HttpClient) { }

  public getAllDermatologists(): Observable<any> {
    return this.http.get('http://localhost:8080/dermatologists');
  }

  public getDermatologistById(id): Observable<any> {
    return this.http.get(`http://localhost:8080/dermatologists/${id}`);
  }

  public getAllDermatologistByPharmacyId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/dermatologists/${id}/pharmacy`);
  }

  public updateDermatologist(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/dermatologists/${id}`, body);
  }
}
