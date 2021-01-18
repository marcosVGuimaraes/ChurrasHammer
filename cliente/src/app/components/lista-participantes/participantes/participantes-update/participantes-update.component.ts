import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participante } from 'src/app/shared/model/participante.model';
import { ListaParticipantesService } from 'src/app/shared/service/lista-participantes.service';

@Component({
  selector: 'app-participantes-update',
  templateUrl: './participantes-update.component.html',
  styleUrls: ['./participantes-update.component.css']
})
export class ParticipantesUpdateComponent implements OnInit {
  
  participante: Participante;
  
  constructor(private participanteService: ListaParticipantesService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.participanteService.participanteReadById(id).subscribe(participante=>{
      this.participante = participante;
    });
  }

  updateParticipante() : void{
    this.participanteService.update(this.participante).subscribe(()=>{
      this.participanteService.showMensage("Participante atualizado com Sucesso!");
      this.router.navigate(["/listaParticipantes"]);
    })
  }  

  cancel(): void{
    this.router.navigate(['/listaParticipantes']);
  }
  
}
