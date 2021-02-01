import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DermatologistAppointmentService {

  constructor(private http: HttpClient) { }

  public createAvailableExamination(body): Observable<any>{
    return this.http.post(`http://localhost:8080/dermatologist-examinations`, body);
  }

  public getAllExaminationsByPharmacyId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/dermatologist-examinations/${id}/pharmacy`);
  }

  public reserveExamination(body): Observable<any> {
    return this.http.put(`http://localhost:8080/dermatologist-examinations/reserve`, body);
  }

  public cancelReservation(body): Observable<any> {
    return this.http.put(`http://localhost:8080/dermatologist-examinations/cancel`, body);
  }


  public getAllDroppedReservationByPatientId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/dermatologist-examinations/dropped/${id}/patient`);
  }

  public getAllActiveReservationByPatientId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/dermatologist-examinations/active/${id}/patient`);
  }

}
