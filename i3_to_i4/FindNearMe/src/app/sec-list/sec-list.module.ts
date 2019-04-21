import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SecListPage } from './sec-list';

@NgModule({
  declarations: [
    SecListPage,
  ],
  imports: [
    IonicModule.forChild(SecListPage),
  ],
})
export class SecListPageModule {}
