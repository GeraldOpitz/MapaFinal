import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeloginPageRoutingModule } from './selogin-routing.module';

import { SeloginPage } from './selogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeloginPageRoutingModule
  ],
  declarations: [SeloginPage]
})
export class SeloginPageModule {}
