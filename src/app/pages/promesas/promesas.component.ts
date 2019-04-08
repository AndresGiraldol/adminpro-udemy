import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {



    this.contarTres().then(
      success => console.log('Termino!', success)
    )
    .catch( error => { console.error('error en la promesa', error); } );

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {

    return new Promise((resolve,reject) => {

      let contador = 0;

      const intervalo = setInterval( () => {

        contador++;

        if ( contador === 3 ) {
          resolve(true);
          clearInterval(intervalo);
        }

      }, 1000);

    });

  }

}
