import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http: HttpClient) { }

  public getAllPharmacyComplaints(): Observable<any> {
    return this.http.get(`http://localhost:8080/complaints/pharmacies`);
  }

  public getAllDermatologistComplaints(): Observable<any> {
    return this.http.get(`http://localhost:8080/complaints/dermatologists`);
  }

  public getAllPharmacistsComplaints(): Observable<any> {
    return this.http.get(`http://localhost:8080/complaints/pharmacists`);
  }

  public createPharmacyComplaint(body): Observable<any> {
    return this.http.post(`http://localhost:8080/complaints/pharmacy`, body);
  }

  public createPharmacistComplaint(body): Observable<any> {
    return this.http.post(`http://localhost:8080/complaints/pharmacist`, body);
  }

  public createDermatologistComplaint(body): Observable<any> {
    return this.http.post(`http://localhost:8080/complaints/dermatologist`, body);
  }

  public answer(body): Observable<any> {
    return this.http.put(`http://localhost:8080/complaints/answer`, body);
  }

 
}
