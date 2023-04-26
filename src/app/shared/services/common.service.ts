import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  baseUrl = environment.baseURL;

  constructor(private http: HttpClient) {}

  public getCountriesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
