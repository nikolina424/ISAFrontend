import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SystemAdminService {

  constructor(private http: HttpClient) { }

  public updateSystemAdmin(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/system-admins/${id}`, body);
  }

  public getSystemAdmin(id): Observable<any> {
    return this.http.get(`http://localhost:8080/system-admins/${id}`);
  }
}
