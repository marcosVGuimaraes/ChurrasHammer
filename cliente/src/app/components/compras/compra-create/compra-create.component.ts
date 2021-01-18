import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/shared/model/compra.model';
import { ComprasService } from 'src/app/shared/service/compras.service';

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

  constructor(private comprasService: ComprasService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createCompra(): void {
    console.log(this.compra);
    this.comprasService.salvarCompra(this.compra).subscribe(()=>{
      this.comprasService.showMensage('Compra Salva!');
      this.router.navigate(['/contabilidade'])
    });
  }

  cancel(): void {
    this.router.navigate(['/contabilidade']);
  }

}
