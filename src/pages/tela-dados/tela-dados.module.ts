import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaDadosPage } from './tela-dados';

@NgModule({
  declarations: [
    TelaDadosPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaDadosPage),
  ],
})
export class TelaDadosPageModule {}
