import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'ae',
    autoria:'se',
    modelo: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  larguraPensamento():string
  {
    if(this.pensamento.conteudo.length > 255)
    {
      return "pensamento-g";
    }
    return "pensamento-p"
  }

}
