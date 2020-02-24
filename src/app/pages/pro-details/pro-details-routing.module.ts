import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProDetailsPage } from './pro-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProDetailsPageRoutingModule {}
