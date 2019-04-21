import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FavoritePage } from './favorite';

@NgModule({
  declarations: [
    FavoritePage,
  ],
  imports: [
    IonicModule.forChild(FavoritePage),
  ],
})
export class FavoritePageModule {}
