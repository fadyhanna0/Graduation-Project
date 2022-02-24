import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from 'src/models/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my auth token',
      }),
    };
  }

  getAllCat(): Observable<ICategory[]> {
    // return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`);
    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/categories`);
  }
  getCatByID(proID: number): Observable<ICategory> {
    return this.httpClient.get<ICategory>(
      `${environment.APIURL}/categories/${proID}`
    );
  }

  addProduct(newprod: ICategory): Observable<ICategory> {
    return this.httpClient
      .post<ICategory>(
        `${environment.APIURL}/categories`,
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
  updateProduct(prodID: number, updateProduct: ICategory) {}
  deleteProduct(prodID: number) {}
}
