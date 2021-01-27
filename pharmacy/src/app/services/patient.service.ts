import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  public updatePatient(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/patients/${id}`, body);
  }

  public addNewAlergy(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/patients/${id}/alergies`, body);
  }

  public getPatient(id): Observable<any> {
    return this.http.get(`http://localhost:8080/patients/${id}`);
  }

  public getAvailableMeds(id): Observable<any> {
    return this.http.get(`http://localhost:8080/patients/${id}/available-meds`);
  }

}
