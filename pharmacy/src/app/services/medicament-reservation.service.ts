import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentReservationService {

  constructor(private http: HttpClient) { }

  public getActiveByPatientId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/medicament-reservations/active/${id}/patient`);
  }

  public getDroppedByPatientId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/medicament-reservations/dropped/${id}/patient`);
  }

  public cancelReservation(body): Observable<any> {
    return this.http.put(`http://localhost:8080/medicament-reservations/cancel`, body);
  }

  public createReservation(body): Observable<any> {
    return this.http.post(`http://localhost:8080/medicament-reservations`, body);
  }
}
