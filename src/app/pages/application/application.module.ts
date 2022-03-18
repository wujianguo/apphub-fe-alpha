import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { PackagesComponent } from './packages/packages.component';
import { ReleasesComponent } from './releases/releases.component';
import { StoresComponent } from './stores/stores.component';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    ApplicationComponent,
    PackagesComponent,
    ReleasesComponent,
    StoresComponent,
    OverviewComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    HttpClientModule,
  ]
})
export class ApplicationModule { }
