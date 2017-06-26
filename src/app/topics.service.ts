import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

import { TopicsDataPoint } from './topics/topics-data-point.model';

@Injectable()
export class TopicsService {

  constructor(private http: Http) { }

  fetchData (): Observable<TopicsDataPoint[]> {
    // return this.http.get('')
    //   .map((result: Response) => result.json());
    return Observable.create((observer: Observer<TopicsDataPoint[]>) => {
      setTimeout(() => {
        observer.next([
          { title: 'Vue.js', value: 30 },
          { title: 'Full Project', value: 30 },
          { title: 'Electron', value: 30 },
          { title: 'Angular', value: 30 },
          { title: 'Laravel', value: 30 }
        ])
      }, 2000);
    })
  }

}
