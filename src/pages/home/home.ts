import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams }from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  registros = [];

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    this.registros = [
      {
        img:'assets/imgs/han-solo.jpg',
        nombre: 'Han Solo',
        titulo: 'Cazarrecompensas'
      },
      {
        img:'assets/imgs/rey.jpg',
        nombre: 'Rey',
        titulo: 'Recolectora'
      },
      {
        img:'assets/imgs/finn.jpg',
        nombre: 'Finn',
        titulo: 'Piloto'
      },
      {
        img:'assets/imgs/leia.jpg',
        nombre: 'Leia',
        titulo: 'Princesa'
      },
    ];

  }
  goToDetalle(item){
    this.navCtrl.push(DetallePage, {item:item});

  }

}
