import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {

  constructor(private http: HttpClient) { }

  public getAllPharmacistByPharmacyId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/pharmacists/${id}/pharmacy`);
  }

  public updatePharmacist(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/pharmacists/${id}`, body);
  }

  public getPharmacist(id): Observable<any> {
    return this.http.get(`http://localhost:8080/pharmacists/${id}`);
  }

  public getPharmacistByDate(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('dateExamination', data["dateExamination"])
                               .set('startExamination', data["startExamination"])
                               .set('endExamination', data["endExamination"])
                               .set('pharmacyId', data["pharmacyId"])
                               
    } 
    return this.http.get(`http://localhost:8080/pharmacists/date`, queryParams);
  }

  public changePricelist(body): Observable<any> {
    return this.http.put(`http://localhost:8080/pharmacists`, body);
  }
}
