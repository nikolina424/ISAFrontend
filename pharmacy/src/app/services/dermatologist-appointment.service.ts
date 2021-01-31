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
}
