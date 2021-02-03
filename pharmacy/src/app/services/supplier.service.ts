import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  public updateSupplier(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/suppliers/${id}`, body);
  }

  public getSupplier(id): Observable<any> {
    return this.http.get(`http://localhost:8080/suppliers/${id}`);
  }
}
