import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizattionComponent } from './organization.component';
import { ApplicationsComponent } from './applications/applications.component';
import { PeopleComponent } from './people/people.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    OrganizattionComponent,
    ApplicationsComponent,
    PeopleComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    HttpClientModule,
  ],
})
export class OrganizationModule { }
