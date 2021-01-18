import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convidado } from 'src/app/shared/model/convidado.model';
import { ListaConvidadoService } from 'src/app/shared/service/lista-convidado.service';

@Component({
  selector: 'app-convidados-update',
  templateUrl: './convidados-update.component.html',
  styleUrls: ['./convidados-update.component.css']
})
export class ConvidadosUpdateComponent implements OnInit {

  convidado: Convidado;
  
  constructor(private convidadoService: ListaConvidadoService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.convidadoService.convidadoReadById(id).subscribe(convidado=>{
      this.convidado = convidado;
    });
  }

  updateConvidado() : void{
    this.convidadoService.updateConvidado(this.convidado).subscribe(()=>{
      this.convidadoService.showMensage("Convidado atualizado com Sucesso!");
      this.router.navigate(["/listaParticipantes"]);
    })
  }  

  cancel(): void{
    this.router.navigate(['/listaParticipantes']);
  }
}
