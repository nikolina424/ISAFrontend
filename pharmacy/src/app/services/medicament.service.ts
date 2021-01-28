import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  constructor(private http: HttpClient) { }

  public getMedicamentById(id): Observable<any> {
    return this.http.get(`http://localhost:8080/medicaments/${id}`);
  }

  public getAllMedicaments(): Observable<any> {
    return this.http.get(`http://localhost:8080/medicaments`);
  }
}
