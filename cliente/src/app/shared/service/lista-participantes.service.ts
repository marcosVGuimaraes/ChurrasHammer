import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Convidado } from '../model/convidado.model';
import { Participante } from '../model/participante.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaParticipantesService {

  participanteBaseURL = "http://localhost:7000/listaParticipantes";
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  getParticipantes(): Observable<Participante[]>{
    return this.http.get<Participante[]>(this.participanteBaseURL).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  salvarParticipante(participante: Participante): Observable<Participante> {
    const url = this.participanteBaseURL + "/salvarParticipante";
    return this.http.post<Participante>(url, participante).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  participanteReadById(id: number): Observable<Participante>{
    const url = "http://localhost:7000/listaParticipante?id=" + id;
    return this.http.get<Participante>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(participante: Participante): Observable<Participante> {
    const url = "http://localhost:7000/listaParticipantes/editarParticipante";
    console.log(url);
    return this.http.post<Participante>(url, participante).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  deleteParticipante(id: number): Observable<Participante>{
    console.log(id);
    const url = this.participanteBaseURL + "/deletarParticipante";
    return this.http.post<Participante>(url, {id: id}).pipe(
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
