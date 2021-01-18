import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Compra } from 'src/app/shared/model/compra.model';
import { Contabilidade } from 'src/app/shared/model/contabilidade.model';
import { ContabilidadeService } from 'src/app/shared/service/contabilidade.service';
import { ConfirmDialogComponent } from '../../templates/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-contabilidade-read',
  templateUrl: './contabilidade-read.component.html',
  styleUrls: ['./contabilidade-read.component.css']
})
export class ContabilidadeReadComponent implements OnInit {

  contablidade : Contabilidade;

  displayedColumns = ['descricao', 'categoria', 'valor', 'action']

  constructor(private convidadoService: ContabilidadeService,
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.getContabilidade();
  }

  navigateCreateCompra(){
    this.router.navigate(['/compra/cadastrarCompra']);
  }

  getContabilidade(){
    this.convidadoService.getDataContabilidade().subscribe(contablidade =>{
      this.contablidade = contablidade
      console.log(contablidade);
    })
  }

  removeCompra(id: number) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Atenção!',
        message: 'Deseja apagar essa compra?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
       this.convidadoService.deleteCompra(id).subscribe(result =>{
        this.convidadoService.showMensage('Participante Exlcuido!');
        this.getContabilidade();
       })
      }
    });
  }

}
