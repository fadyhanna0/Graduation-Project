import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from 'src/models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my auth token',
      }),
    };
  }

  getAllProducts(): Observable<IProduct[]> {
    // return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`);
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/Product`);
  }
  getProductByID(proID: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `${environment.APIURL}/products/${proID}`
    );
  }
  getProductByCatID(catID: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${environment.APIURL}/products?CategoryID${catID}`
    );
  }
  addProduct(newprod: IProduct): Observable<IProduct> {
    return this.httpClient
      .post<IProduct>(
        `${environment.APIURL}/products`,
        JSON.stringify('newProd'),
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
  updateProduct(prodID: number, updateProduct: IProduct) {}
  deleteProduct(prodID: number) {}
}
