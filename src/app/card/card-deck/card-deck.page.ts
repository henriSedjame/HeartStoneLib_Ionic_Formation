import { Component, OnInit } from '@angular/core';
import {CardService} from "../../shared/card.service";
import {Card} from "../../models/card";
import {filter} from "@angular-devkit/schematics";
import {map, takeWhile} from "rxjs/operators";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.page.html',
  styleUrls: ['./card-deck.page.scss'],
})
export class CardDeckPage implements OnInit {

  public cards: Card[] = [];

  constructor(private cardService: CardService, private toaster: ToastController) { }

  ngOnInit() {
    this.getCardDecks();
  }

  private getCardDecks(){
    this.cardService.getCards().subscribe(
      value => this.cards = value,
      error1 => this.presentToast('Erreur au cahrgement des cartes', 'danger'),
      () => this.presentToast('Chargment terminé', 'primary')
    );
  }

  async  presentToast(msg: string, color: string){
    const toast =  await this.toaster.create({
      message: msg,
      duration: 3000,
      position: "middle",
      color : color
    });
    toast.present();
  }

}
