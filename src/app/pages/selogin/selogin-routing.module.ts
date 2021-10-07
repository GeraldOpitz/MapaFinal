import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeloginPage } from './selogin.page';

const routes: Routes = [
  {
    path: '',
    component: SeloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeloginPageRoutingModule {}
