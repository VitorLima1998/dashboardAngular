import { MaterialModule } from './../../material/material.module';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card7Component } from './card7/card7.component';
import { Card11Component } from './card11/card11.component';

const COMPONENTS = [
  MenuComponent,
  HeaderComponent,
  Card1Component,
  Card2Component,
  Card7Component,
  Card11Component,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: [COMPONENTS],
})
export class ComponentsModule {}
