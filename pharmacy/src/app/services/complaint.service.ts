import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http: HttpClient) { }

  public getAllComplaintsByPharmacyId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/complaints/${id}/pharmacy`);
  }

  public getAllComplaintsOnDermatologistsByPharmacyId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/complaints/dermatologists/${id}/pharmacy`);
  }

  public getAllComplaintsOnPharmacistsByPharmacyId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/complaints/pharmacists/${id}/pharmacy`);
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
