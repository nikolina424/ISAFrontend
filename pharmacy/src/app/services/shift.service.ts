import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor(private http: HttpClient) { }


  public createShift(body): Observable<any> {
    return this.http.post(`http://localhost:8080/shifts`, body);
  }

  public getAllShiftsByPharmacyId(id):Observable<any> {
    return this.http.get(`http://localhost:8080/shifts/${id}/pharmacy`);
  }

  public getOneDermatologistOnePharmacyShift(data): Observable<any>{
    let queryParams = {
      params : new HttpParams().set('pharmacyId', data["pharmacyId"])
                               .set('dermatologistId', data["dermatologistId"])
    } 
    return this.http.get(`http://localhost:8080/shifts/special-shift`, queryParams);
  }

}
