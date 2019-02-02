import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TabsPage} from "./tabs.page";
import {CardDeckPage} from "../card/card-deck/card-deck.page";
import {CardModule} from "../card/card.module";
import {HomePageModule} from "../home/home.module";
import {HomePage} from "../home/home.page";

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path : 'home',
        component : HomePage
      },
      {
        path: 'card',
        component: CardDeckPage
      }
    ]

  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [
    CardModule,
    HomePageModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsRoutingModule {


}