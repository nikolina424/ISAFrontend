import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  public login(body): Observable<any> {
    return this.http.put(`http://localhost:8080/auth/login`, body);
  }

  public registerPatient(body): Observable<any> {
    return this.http.post('http://localhost:8080/auth/register-patient', body);
  }

  public registerPharmacist(body): Observable<any> {
    return this.http.post('http://localhost:8080/auth/register-pharmacist', body)
  }

  public registerSupplier(body): Observable<any> {
    return this.http.post('http://localhost:8080/auth/register-supplier', body)
  }

  public registerDermatologist(body): Observable<any> {
    return this.http.post('http://localhost:8080/auth/register-dermatologist', body)
  }

  public registerSystemAdmin(body): Observable<any> {
    return this.http.post('http://localhost:8080/auth/register-system-admin', body)
  }

  public registerPharmacyAdmin(body): Observable<any> {
    return this.http.post('http://localhost:8080/auth/register-pharmacy-admin', body)
  }

  public changePasswordForPharmacyAdmin(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/auth/${id}`, body);
  }

}
