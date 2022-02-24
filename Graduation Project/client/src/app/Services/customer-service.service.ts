import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { iCustomer } from 'src/models/icustomer';

@Injectable({
  providedIn: 'root',
})
export class CustomerServiceService {
  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my auth token',
      }),
    };
  }

  getAll(): Observable<iCustomer[]> {
    return this.httpClient.get<iCustomer[]>(`${environment.APIURL}/customer`);
  }
  getByID(cID: number): Observable<iCustomer> {
    return this.httpClient.get<iCustomer>(
      `${environment.APIURL}/customer/${cID}`
    );
  }

  addProduct(newprod: iCustomer): Observable<iCustomer> {
    return this.httpClient
      .post<iCustomer>(
        `${environment.APIURL}/customer`,
        JSON.stringify('newcat'),
        this.httpOption
      )
      .pipe(
        retry(2),
        catchError((err) => {
          console.log(err);
          return throwError(() => new Error('post error'));
        })
      );
  }
  updateProduct(prodID: number, updateProduct: iCustomer) {}
  deleteProduct(prodID: number) {}
}
