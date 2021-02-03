import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricelistService {

  constructor(private http: HttpClient) { }

  public getAllByPharmacyId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/price-medicaments/${id}/pharmacy`);
  }

  public getActivePricelistByPharmacyId(id): Observable<any> {
    return this.http.get(`http://localhost:8080/pricelists/active/${id}/pharmacy`);
  }

  public createPriceMedicament(body): Observable<any> {
    return this.http.post(`http://localhost:8080/price-medicaments`, body);
  }

  public createPricelist(body): Observable<any> {
    return this.http.post(`http://localhost:8080/pricelists`, body);
  }
}
