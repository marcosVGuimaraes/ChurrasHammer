import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/shared/model/compra.model';
import { ContabilidadeService } from 'src/app/shared/service/contabilidade.service';

@Component({
  selector: 'app-compra-create',
  templateUrl: './compra-create.component.html',
  styleUrls: ['./compra-create.component.css']
})
export class CompraCreateComponent implements OnInit {

  compra: Compra = {
    descricao: '',
    categoria: '',
    valor: null
  }

  constructor(private contabilidadeService: ContabilidadeService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createCompra(): void {
    console.log(this.compra);
    this.contabilidadeService.salvarCompra(this.compra).subscribe(()=>{
      this.contabilidadeService.showMensage('Compra Salva!');
      this.router.navigate(['/contabilidade'])
    });

  }

  cancel(): void {
    this.router.navigate(['/contabilidade']);
  }

}
