import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DistancePage } from './distance';

@NgModule({
  declarations: [
    DistancePage,
  ],
  imports: [
    IonicModule.forChild(DistancePage),
  ],
})
export class DistancePageModule {}
