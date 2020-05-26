import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccineCardPageRoutingModule } from './vaccine-card-routing.module';

import { VaccineCardPage } from './vaccine-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccineCardPageRoutingModule
  ],
  declarations: [VaccineCardPage]
})
export class VaccineCardPageModule {}
