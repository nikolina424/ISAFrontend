import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacistAppointmentService {

  constructor(private http: HttpClient) { }

  public getAllDroppedReservationByPatientId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/pharmacist-examinations/dropped/${id}/patient`);
  }

  public getAllActiveReservationByPatientId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/pharmacist-examinations/active/${id}/patient`);
  }

}
