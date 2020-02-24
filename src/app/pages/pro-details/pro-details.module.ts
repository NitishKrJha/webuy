import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProDetailsPageRoutingModule } from './pro-details-routing.module';

import { ProDetailsPage } from './pro-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProDetailsPageRoutingModule
  ],
  declarations: [ProDetailsPage]
})
export class ProDetailsPageModule {}
