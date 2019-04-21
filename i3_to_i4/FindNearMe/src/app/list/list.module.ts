import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListPage } from './list';

@NgModule({
  declarations: [
    ListPage,
  ],
  imports: [
    IonicModule.forChild(ListPage),
  ],
})
export class ListPageModule {}
