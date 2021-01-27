import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationRequestService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public confirmRegistrationRequest(body): Observable<any> {
    return this.http.put('http://localhost:8080/patients/confirm', body);
  }

  public getAllPendingUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/patients/registration-requests');
  }

  public approveRegistrationRequest(body): Observable<any> {
    return this.http.put('http://localhost:8080/patients/approve', body);
  }

  public denyRegistrationRequest(body): Observable<any> {
    return this.http.put('http://localhost:8080/patients/deny', body);
  }

}

