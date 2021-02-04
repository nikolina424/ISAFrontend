import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  constructor(private http: HttpClient) { }

  public createOrderMedicament(body): Observable<any> {
    return this.http.post(`http://localhost:8080/order-medicaments`, body);
  }

  public createPurchaseOrder(body): Observable<any> {
    return this.http.post(`http://localhost:8080/purchase-orders`, body);
  }

}
