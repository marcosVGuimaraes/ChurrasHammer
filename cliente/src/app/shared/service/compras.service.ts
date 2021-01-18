import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Compra } from '../model/compra.model';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  comprasBaseURL = "http://localhost:7000/compras";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  compraReadById(id: number): Observable<Compra>{
    const url = this.comprasBaseURL + "/getCompra?id=" + id;
    return this.http.get<Compra>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  salvarCompra(compra: Compra): Observable<Compra> {
    const url = this.comprasBaseURL + "/salvarCompra";
    return this.http.post<Compra>(url, compra).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  updateCompra(compra: Compra): Observable<Compra> {
    const url = this.comprasBaseURL +"/editarCompra";
    console.log(url);
    return this.http.post<Compra>(url, compra).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  deleteCompra(id: number): Observable<Compra>{
    const url = this.comprasBaseURL + "/deleteCompra";
    return this.http.post<Compra>(url, {id: id}).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMensage('Ocorreu um erro!', true);
    return EMPTY;
  }

  showMensage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
}

}
