import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { WelcomePage } from './welcome';

@NgModule({
  declarations: [
    WelcomePage,
  ],
  imports: [
    IonicModule.forChild(WelcomePage),
  ],
})
export class WelcomePageModule {}
