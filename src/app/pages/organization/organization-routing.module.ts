import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizattionComponent } from './organization.component';
import { ApplicationsComponent } from './applications/applications.component';
import { PeopleComponent } from './people/people.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [{
  path: '',
  component: OrganizattionComponent,
  children: [
    {
      path: 'applications',
      component: ApplicationsComponent,
    },
    {
      path: 'people',
      component: PeopleComponent,
    },
    {
      path: 'settings',
      component: SettingsComponent,
    },
  ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationRoutingModule { }
