import { Component, OnInit } from '@angular/core';

import { Release } from '../service/release';
import { ReleasesService } from '../service/releases.service';
import { OperatingSystem } from '../service/operating-system';

@Component({
  selector: 'ngx-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss'],
})
export class ReleasesComponent implements OnInit {

  settings = {
    // hideSubHeader: true,
    actions: null,
    columns: {
      release_id: {
        title: 'Release',
        sort: false,
        filter: false,
      },
      internal_build: {
        title: 'Build',
        sort: false,
        filter: false,
      },
      enabled: {
        title: 'Status',
        sort: false,
        filter: false,
      },
      full_version: {
        title: 'Version',
        sort: false,
        filter: false,
        valuePrepareFunction: (_cell, row: Release) => {
          return row.version + '(' + row.short_version + ')';
        },
      },
      size: {
        title: 'Size',
        sort: false,
        filter: false,
        valuePrepareFunction: (_cell, row: Release) => {
          return (row.size / 1024.0 / 1024.0).toFixed(2) + ' MB';
        },
      },
      commit_id: {
        title: 'Commit',
        sort: false,
        filter: false,
      },
      release_notes: {
        title: 'Release notes',
        sort: false,
        filter: false,
      },
      create_time: {
        title: 'Date',
        sort: false,
        filter: false,
        valuePrepareFunction: (_cell, row: Release) => {
          return new Date(row.create_time).toLocaleString();
        },
      },
      operation: {
        title: 'Operation',
        sort: false,
        filter: false,
        type: 'html',
        valuePrepareFunction: (_cell, row: Release) => {
          if (row.os === OperatingSystem.Windows ||
            row.os === OperatingSystem.Linux ||
            row.os === OperatingSystem.macOS) {
            return '<a href="' + row.package_file + '" download>Install</a>';
          } else {
            return '<a href="install" target="_blank">Install</a>';
          }
        },
      },
    },
  };
  constructor(public source: ReleasesService) { }


  ngOnInit(): void {
  }

}
