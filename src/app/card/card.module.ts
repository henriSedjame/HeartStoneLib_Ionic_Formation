import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardDeckPage} from "./card-deck/card-deck.page";
import { IonicModule } from '@ionic/angular';
import {CardService} from "../shared/card.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [CardDeckPage],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ],
  providers: [
    CardService
  ]
})
export class CardModule { }
