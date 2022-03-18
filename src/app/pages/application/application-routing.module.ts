import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationComponent } from './application.component';
import { PackagesComponent } from './packages/packages.component';
import { ReleasesComponent } from './releases/releases.component';
import { StoresComponent } from './stores/stores.component';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [{
  path: '',
  component: ApplicationComponent,
  children: [
    {
      path: 'packages',
      component: PackagesComponent,
    },
    {
      path: 'releases',
      component: ReleasesComponent,
    },
    {
      path: 'stores',
      component: StoresComponent,
    },
    {
      path: 'overview',
      component: OverviewComponent,
    },
    {
      path: 'settings',
      component: SettingsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
