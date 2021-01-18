import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-parcitipante-crud',
  templateUrl: './lista-parcitipante-crud.component.html',
  styleUrls: ['./lista-parcitipante-crud.component.css']
})
export class ListaParcitipanteCRUDComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToParticipanteCreate(): void {
    this.router.navigate(['/listaParticipantes/cadastrarParticipante']);
  };

}
