import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listarPensamentos: Pensamento[] =[];

  constructor(private service:PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listarPensamentos)=>{
      this.listarPensamentos = listarPensamentos;
    });
  }

}
