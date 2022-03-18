import { Component, OnInit } from '@angular/core';

import { ApplicationsService } from '../service/applications.service';

@Component({
  selector: 'ngx-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  settings = {
    // hideSubHeader: true,
    actions: null,
    columns: {
      name: {
        title: 'Name',
        sort: false,
        filter: false,
      },
      path: {
        title: 'Path',
        sort: false,
        filter: false,
      },
      enable_os: {
        title: 'OS',
        sort: false,
        filter: false,
      },
    },
  };
  constructor(public source: ApplicationsService) { }

  ngOnInit(): void {
  }

}
