import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convidado } from 'src/app/shared/model/convidado.model';
import { ListaConvidadoService } from 'src/app/shared/service/lista-convidado.service';

@Component({
  selector: 'app-convidados-create',
  templateUrl: './convidados-create.component.html',
  styleUrls: ['./convidados-create.component.css']
})
export class ConvidadosCreateComponent implements OnInit {

  convidado: Convidado = {
    nome: '',    
    id_participante: 0,
    consumo_bebida: false
  }

  constructor(private convidadoService: ListaConvidadoService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.convidado.id_participante = +this.route.snapshot.paramMap.get('id');
  }

  createParticipante(): void {
    this.convidadoService.salvarConvidado(this.convidado).subscribe(()=>{
      this.convidadoService.showMensage('Participante Salvo!');
      this.router.navigate(['/listaParticipantes'])
    });

  }

  cancel(): void {
    this.router.navigate(['/listaParticipantes']);
  }

}
