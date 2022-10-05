import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';

@NgModule({
  declarations: [AppComponent, ListMenuComponent, HeaderMenuComponent, NavBarComponent, Card1Component, Card2Component, Card3Component, Card4Component, Card5Component, Card6Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
