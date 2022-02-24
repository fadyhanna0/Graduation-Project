import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
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
        //Authorization: 'my auth token',
      }),
    };
  }
  private handleError(error: HttpErrorResponse) {
    // Generic Error handler
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Write error details in Generic error log

    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Error occured, please try again'));
  }
  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient
      .get<IProduct[]>(`${environment.APIURL}/Product`)
      .pipe(retry(2), catchError(this.handleError));
  }
  getProductByID(proID: number): Observable<IProduct> {
    return this.httpClient
      .get<IProduct>(`${environment.APIURL}/Product/${proID}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  getProductByCatID(catID: number): Observable<IProduct[]> {
    return this.httpClient
      .get<IProduct[]>(`${environment.APIURL}/Product?CategoryID${catID}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  addProduct(newprod: IProduct): Observable<IProduct> {
    return this.httpClient
      .post<IProduct>(
        `${environment.APIURL}/Product`,
        JSON.stringify(newprod),
        this.httpOption
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  updateProduct(proid: number, updateProduct: IProduct): Observable<IProduct> {
    return this.httpClient
      .put<IProduct>(
        `${environment.APIURL}/Product/${proid}`,
        JSON.stringify(updateProduct),
        this.httpOption
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  deleteProduct(proid: number) {
    return this.httpClient
      .delete<IProduct>(
        `${environment.APIURL}/Product/${proid}`,
        this.httpOption
      )
      .pipe(retry(1), catchError(this.handleError));
  }
}
