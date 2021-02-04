import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }

  public subscribePatient(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/promotions/subscribe/${id}/patient`, body);
  }

  public createPromotion(body): Observable<any> {
    return this.http.post(`http://localhost:8080/promotions/create`, body);
  }

  public cancelSubscription(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/promotions/cancel-subscription/${id}/patient`, body);
  }



  
}
