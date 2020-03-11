import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddeditaddressPageRoutingModule } from './addeditaddress-routing.module';

import { AddeditaddressPage } from './addeditaddress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddeditaddressPageRoutingModule
  ],
  declarations: [AddeditaddressPage]
})
export class AddeditaddressPageModule {}
