import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'distance', loadChildren: './distance/distance.module#DistancePageModule' },
  { path: 'favorite', loadChildren: './favorite/favorite.module#FavoritePageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home1', loadChildren: './home1/home1.module#Home1PageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login1', loadChildren: './login1/login1.module#Login1PageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'sec-list', loadChildren: './sec-list/sec-list.module#SecListPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'sharepopup', loadChildren: './sharepopup/sharepopup.module#SharepopupPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
