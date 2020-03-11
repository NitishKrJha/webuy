import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddeditaddressPageRoutingModule } from './addeditaddress-routing.module';
import { SharedModule } from '../../_shared/shared.module';
import { AddeditaddressPage } from './addeditaddress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    AddeditaddressPageRoutingModule
  ],
  declarations: [AddeditaddressPage]
})
export class AddeditaddressPageModule {}
