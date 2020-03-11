import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddeditaddressPage } from './addeditaddress.page';

const routes: Routes = [
  {
    path: '',
    component: AddeditaddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddeditaddressPageRoutingModule {}
