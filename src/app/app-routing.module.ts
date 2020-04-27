import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LandingPageComponent,
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./components/platform/login-page/login.module').then(m => m.LoginModule)
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./components/platform/register-page/register.module').then(m => m.RegisterModule)
  // },
  {
    path: ':userRoute',
    loadChildren: () => import('./platform/platform.module').then(m => m.PlatformModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./platform/platform.module').then(m => m.PlatformModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
