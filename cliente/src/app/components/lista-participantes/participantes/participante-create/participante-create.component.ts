import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participante } from 'src/app/shared/model/participante.model';
import { ListaParticipantesService } from 'src/app/shared/service/lista-participantes.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-participante-create',
  templateUrl: './participante-create.component.html',
  styleUrls: ['./participante-create.component.css']
})
export class ParticipanteCreateComponent implements OnInit {

  participante: Participante = {
    nome_participante: '',
    setor: '',
    consumo_bebida: false
  }

  constructor(private participanteService: ListaParticipantesService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createParticipante(): void {
    this.participanteService.salvarParticipante(this.participante).subscribe(()=>{
      this.participanteService.showMensage('Participante Salvo!');
      this.router.navigate(['/listaParticipantes'])
    });

  }

  cancel(): void {
    this.router.navigate(['/listaParticipantes']);
  }

}
