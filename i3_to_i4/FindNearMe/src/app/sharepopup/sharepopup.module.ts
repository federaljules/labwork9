import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharepopupPage } from './sharepopup';

@NgModule({
  declarations: [
    SharepopupPage,
  ],
  imports: [
    IonicModule.forChild(SharepopupPage),
  ],
  exports: [
    SharepopupPage
  ]
})
export class SharepopupPageModule {}
