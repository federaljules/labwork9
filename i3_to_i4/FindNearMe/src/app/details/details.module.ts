import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DetailsPage } from './details';

@NgModule({
  declarations: [
    DetailsPage,
  ],
  imports: [
    IonicModule.forChild(DetailsPage),
  ],
})
export class DetailsPageModule {}
