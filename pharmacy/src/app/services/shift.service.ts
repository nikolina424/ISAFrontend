import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor(private http: HttpClient) { }


  public createShift(body): Observable<any> {
    return this.http.post(`http://localhost:8080/shifts`, body);
  }

}
