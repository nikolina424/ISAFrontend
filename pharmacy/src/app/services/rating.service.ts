import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  public ratePharmacist(body): Observable<any> {
    return this.http.post(`http://localhost:8080/ratings/pharmacy`, body);
  }

  public rateDermatologist(body): Observable<any> {
    return this.http.post(`http://localhost:8080/ratings/dermatologist`, body);
  }

  public ratePharmacy(body): Observable<any> {
    return this.http.post(`http://localhost:8080/ratings/pharmacy`, body);
  }

  public rateMedicament(body): Observable<any> {
    return this.http.post(`http://localhost:8080/ratings/medicament`, body);
  }
}
