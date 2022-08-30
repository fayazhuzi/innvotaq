import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogService {
  
  baseURL: string = "'https://jsonplaceholder.typicode.com/"

  constructor(private https: HttpClient) { }

  getBlogsData(): Observable<any> {
    debugger
    return this.https.get<any>(this.baseURL + "posts");
  }
}
