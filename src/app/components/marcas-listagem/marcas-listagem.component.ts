import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../../marcas.service';

@Component({
  selector: 'app-marcas-listagem',
  templateUrl: './marcas-listagem.component.html',
  styleUrls: ['./marcas-listagem.component.css']
})
export class MarcasListagemComponent implements OnInit {

  marcas: Array<any>;

  constructor(private marcasService : MarcasService) { }

  ngOnInit() {
    this.listarMarcas();
  }

  listarMarcas() {
    this.marcasService.listarMarcas().subscribe(dados => this.marcas = dados);
  }

}
