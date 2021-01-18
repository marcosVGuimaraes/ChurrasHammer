import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Convidado } from '../model/convidado.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaConvidadoService {

  convidadoURL = "http://localhost:7000/listaConvidados";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  getConvidados(): Observable<Convidado[]>{
    return this.http.get<Convidado[]>(this.convidadoURL).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  salvarConvidado(convidado: Convidado): Observable<Convidado> {
    const url = this.convidadoURL + "/salvarConvidado";
    return this.http.post<Convidado>(url, convidado).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  convidadoReadById(id: number): Observable<Convidado>{
    const url = "http://localhost:7000/listaConvidado?id=" + id;
    return this.http.get<Convidado>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  updateConvidado(convidado: Convidado): Observable<Convidado> {
    const url = this.convidadoURL +"/editarConvidado";
    return this.http.post<Convidado>(url, convidado).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  deleteConvidado(id: number): Observable<Convidado>{
    console.log(id);
    const url = this.convidadoURL + "/deleteConvidado";
    return this.http.post<Convidado>(url, {id: id}).pipe(
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
