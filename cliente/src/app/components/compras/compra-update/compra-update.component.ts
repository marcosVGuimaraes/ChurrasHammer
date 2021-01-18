import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from 'src/app/shared/model/compra.model';
import { ComprasService } from 'src/app/shared/service/compras.service';
import { ContabilidadeService } from 'src/app/shared/service/contabilidade.service';

@Component({
  selector: 'app-compra-update',
  templateUrl: './compra-update.component.html',
  styleUrls: ['./compra-update.component.css']
})
export class CompraUpdateComponent implements OnInit {

  compra: Compra;

  constructor(private comprasService: ComprasService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.comprasService.compraReadById(id).subscribe(compra=>{
      this.compra = compra;
    });
  }

  updateCompras() : void{
    this.comprasService.updateCompra(this.compra).subscribe(()=>{
      this.comprasService.showMensage("Convidado atualizado com Sucesso!");
      this.router.navigate(["/contabilidade"]);
    })
  }

  cancel(): void {
    this.router.navigate(['/contabilidade']);
  }

}
