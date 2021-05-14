import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private httpClient: HttpClient) { }

  countryUrl: string = `${environment.covidApiUrl}countries`;
  historyUrl: string = `${environment.covidApiUrl}history`;
  statUrl: string = `${environment.covidApiUrl}statistics`;

  apiKey: string = `${environment.apiKey}`;
  apiHost: string = `${environment.apiHost}`;

  httpHeader = {
    headers: new HttpHeaders({
      'X-Rapidapi-Key' : this.apiKey
    })
  }

  getCountries(): Observable<any>{
    return this.httpClient.get<any>(this.countryUrl, this.httpHeader);
  }

  getHistory(countryName:string, date: string):Observable<any>{
    return this.httpClient.get<any>(`${this.historyUrl}?country=${countryName}&day=${date} `, this.httpHeader);
  }

  getStatistics = (selectedCountry?:string):Observable<any> =>
  (selectedCountry!==undefined) ? this.httpClient.get<any>(`${this.statUrl}?country=${selectedCountry}`, this.httpHeader) : this.httpClient.get<any>(this.statUrl, this.httpHeader);


}
