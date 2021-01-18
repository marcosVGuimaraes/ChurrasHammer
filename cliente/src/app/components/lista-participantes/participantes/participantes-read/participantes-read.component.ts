import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/components/templates/dialogs/confirm-dialog/confirm-dialog.component';
import { Participante } from 'src/app/shared/model/participante.model';
import { ListaParticipantesService } from 'src/app/shared/service/lista-participantes.service';

@Component({
  selector: 'app-participantes-read',
  templateUrl: './participantes-read.component.html',
  styleUrls: ['./participantes-read.component.css']
})
export class ParticipantesReadComponent implements OnInit {

  participantes: Participante[]


  displayedColumns = ['nome_participante', 'setor', 'consumo_bebida', 'tem_convidado','action']
  
  constructor(private participanteService: ListaParticipantesService,
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.getListParticipantes();
  }

  getListParticipantes(){
    this.participanteService.getParticipantes().subscribe(participantes =>{
      this.participantes = participantes
      console.log(participantes);
    })
  }

  addConvidado(id: number){
    this.router.navigate(['/listaConvidado/cadastrarConvidado/'+id])
  }

  removeParticipante(id: number) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Atenção!',
        message: 'Deseja apagar esse participante?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
       this.participanteService.deleteParticipante(id).subscribe(result =>{
        this.participanteService.showMensage('Participante Exlcuido!');
        this.getListParticipantes();
       })
      }
    });
  }

}
