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

}
