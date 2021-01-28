import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {

  constructor(private http: HttpClient) { }

  public getAllPharmacistByPharmacyId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/pharmacists/${id}/pharmacy`);
  }
}
