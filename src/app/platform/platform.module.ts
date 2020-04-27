import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {DiscoverComponent} from './discover/discover.component';
import {PlatformRoutingModule} from './platform-routing.module';


@NgModule({
  declarations: [
    UserProfileComponent,
    DiscoverComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    PlatformRoutingModule
  ]
})
export class PlatformModule {
}
