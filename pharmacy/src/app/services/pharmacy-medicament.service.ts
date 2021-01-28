import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacyMedicamentService {

  constructor(private http: HttpClient) { }

  public getAllMedicamentsByPharmacyId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/pharmacy-medicaments/${id}/pharmacy`);
  }

  
  public getPharmacyMedicament(id): Observable<any> {
    return this.http.get(`http://localhost:8080/pharmacy-medicaments/${id}`);
  }

  public updatePharmacyMedicament(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/pharmacy-medicaments/${id}`, body);
  }

  public addMedicamentToPharmacy(body): Observable<any> {
    return this.http.post(`http://localhost:8080/pharmacy-medicaments`, body);
  }

}
