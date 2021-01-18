import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/components/templates/dialogs/confirm-dialog/confirm-dialog.component';
import { Convidado } from 'src/app/shared/model/convidado.model';
import { ListaConvidadoService } from 'src/app/shared/service/lista-convidado.service';

@Component({
  selector: 'app-convidados-read',
  templateUrl: './convidados-read.component.html',
  styleUrls: ['./convidados-read.component.css']
})
export class ConvidadosReadComponent implements OnInit {
 
  convidados: Convidado[]

  displayedColumns = ['nome', 'convidado_por', 'consumo_bebida','action']
  
  constructor(private convidadoService: ListaConvidadoService,
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.getListConvidados();
  }

  getListConvidados(){
    this.convidadoService.getConvidados().subscribe(convidados =>{
      this.convidados = convidados
      console.log(convidados);
    })
  }

  removeConvidado(id: number) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Atenção!',
        message: 'Deseja apagar esse convidado ?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
       this.convidadoService.deleteConvidado(id).subscribe(result =>{        
        this.convidadoService.showMensage('Convidado Exlcuido!');    
        this.getListConvidados();            
       });
      }
    });    
  }
}
