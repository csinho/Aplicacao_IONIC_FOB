import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesCtePage } from './detalhes-cte';

@NgModule({
  declarations: [
    DetalhesCtePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesCtePage),
  ],
})
export class DetalhesCtePageModule {}
