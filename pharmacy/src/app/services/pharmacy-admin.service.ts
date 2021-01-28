import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacyAdminService {

  constructor(private http: HttpClient) { }

  public updatePharmacyAdmin(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/pharmacy-admins/${id}`, body);
  }

  public getPharmacyAdmin(id): Observable<any> {
    return this.http.get(`http://localhost:8080/pharmacy-admins/${id}`);
  }

}
