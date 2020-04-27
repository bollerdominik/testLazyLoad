import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {DiscoverComponent} from './discover/discover.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
  },
  // DiscoverComponent should be on accessible from /discover
  {
    path: 'discover',
    component: DiscoverComponent,
  },
  // {
  //   path: ':sets/:setRoute',
  //   component: SetPageComponent
  // },
  // {
  //   path: ':trackRoute',
  //   component: TrackPageComponent,
  // },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule {
}
