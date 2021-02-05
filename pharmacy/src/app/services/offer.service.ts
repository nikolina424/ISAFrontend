import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  public createOffer(body): Observable<any> {
    return this.http.post(`http://localhost:8080/offers`, body);
  }

  public getAllOffersBySupplierId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/offers/${id}/supplier`);
  }

  public getAllOffersByPurchaseOrderId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/offers/${id}/purchase-order`);
  }

  public getOffer(id): Observable<any> {
    return this.http.get(`http://localhost:8080/offers/${id}`);
  }

  public changeOffer(body): Observable<any> {
    return this.http.put(`http://localhost:8080/offers`, body);
  }

}
