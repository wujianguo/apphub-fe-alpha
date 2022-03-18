import { Injectable } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService extends LocalDataSource {

  lastRequestCount: number;
  endpoint: string;

  constructor(protected http: HttpClient) {
    super();
    this.endpoint = environment.external_url + 'orgs/google/apps/chrome';
  }


  getElements(): Promise<any> {
    const url = this.endpoint + '/releases.json';
    return this.http.get(url, { observe: 'response' })
      .pipe(
        map(res => {
          this.lastRequestCount = parseInt(res.headers.get('x-total-count'), 10);
          return res.body;
        }),
      ).toPromise();
  }

}
