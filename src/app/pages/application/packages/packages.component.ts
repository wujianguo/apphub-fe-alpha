import { Component, OnInit } from '@angular/core';

import { Package } from '../service/package';
import { PackagesService } from '../service/packages.service';
import { OperatingSystem } from '../service/operating-system';

@Component({
  selector: 'ngx-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {

  settings = {
    // hideSubHeader: true,
    actions: null,
    columns: {
      internal_build: {
        title: 'Build',
        sort: false,
        filter: false,
      },
      full_version: {
        title: 'Version',
        sort: false,
        filter: false,
        valuePrepareFunction: (_cell, row: Package) => {
          return row.version + '(' + row.short_version + ')';
        },
      },
      size: {
        title: 'Size',
        sort: false,
        filter: false,
        valuePrepareFunction: (_cell, row: Package) => {
          return (row.size / 1024.0 / 1024.0).toFixed(2) + ' MB';
        },
      },
      commit_id: {
        title: 'Commit',
        sort: false,
        filter: false,
      },
      description: {
        title: 'Description',
        sort: false,
        filter: false,
      },
      create_time: {
        title: 'Date',
        sort: false,
        filter: false,
        valuePrepareFunction: (_cell, row: Package) => {
          return new Date(row.create_time).toLocaleString();
        },
      },
      operation: {
        title: 'Operation',
        sort: false,
        filter: false,
        type: 'html',
        valuePrepareFunction: (_cell, row: Package) => {
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
  constructor(public source: PackagesService) { }

  ngOnInit(): void {
  }

}
