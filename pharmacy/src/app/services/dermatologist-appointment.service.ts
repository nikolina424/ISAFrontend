import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DermatologistAppointmentService {

  constructor(private http: HttpClient) { }

  public createAvailableExamination(data): Observable<any>{
    console.log(data["startTimeExamination"]);
    let queryParams = {
      params : new HttpParams().set("startTimeExamination", data["startTimeExamination"])
                               .set("endTimeExamination", data["endTimeExamination"])
                               .set("dateExamination", data["dateExamination"])
                               .set("pharmacyId", data["pharmacyId"])
                               .set("dermatologistId", data["dermatologistId"])
                               .set("price", data["price"])
    } 
    console.log(queryParams);
    return this.http.post(`http://localhost:8080/dermatologist-examinations`, queryParams);
  }

  public getAllExaminationsByPharmacyId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/dermatologist-examinations/${id}/pharmacy`);
  }
}
