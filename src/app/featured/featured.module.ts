import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthorizationModule } from './authorization/authorization.module';
import { FeaturedRouting } from './featured.routes';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthorizationModule,
    FeaturedRouting,
    DashboardModule
  ],
  declarations: [],
  exports: [SharedModule]
})
export class FeaturedModule { }
