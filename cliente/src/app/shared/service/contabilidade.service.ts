import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Compra } from '../model/compra.model';
import { Contabilidade } from '../model/contabilidade.model';

@Injectable({
  providedIn: 'root'
})
export class ContabilidadeService {

  contabilidadeBaseURL = "http://localhost:7000/contabilidade";

  comprasBaseURL = "http://localhost:7000/contabilidade";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  getDataContabilidade(): Observable<Contabilidade>{
    return this.http.get<Contabilidade>(this.contabilidadeBaseURL).pipe(
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
