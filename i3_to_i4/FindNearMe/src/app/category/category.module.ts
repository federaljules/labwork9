import { NgModule } from '@angular/core';
import { IonicModule } from '@@ionic/angular';
import { CategoryPage } from './category';

@NgModule({
  declarations: [
    CategoryPage,
  ],
  imports: [
    IonicModule.forChild(CategoryPage),
  ],
})
export class CategoryPageModule {}
