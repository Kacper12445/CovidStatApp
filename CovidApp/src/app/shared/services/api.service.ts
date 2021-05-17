import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  countryUrl: string = `${environment.covidApiUrl}countries`;
  historyUrl: string = `${environment.covidApiUrl}history`;
  statUrl: string = `${environment.covidApiUrl}statistics`;
  totalUrl: string = `${environment.totalApiUrl}totals`;

  countryListUrl: string = 'https://restcountries.eu/rest/v2/all';

  apiKey: string = `${environment.apiKey}`;
  apiHost: string = `${environment.apiHost}`;

  httpHeader = {
    headers: new HttpHeaders({
      'X-Rapidapi-Key': this.apiKey,
    }),
  };

  getCountryCode(): Observable<any> {
    console.log(this.countryListUrl);
    return this.httpClient.get<any>(this.countryListUrl);
  }

  getTotalStats(): Observable<any> {
    return this.httpClient.get<any>(this.totalUrl, this.httpHeader);
  }

  getCountries(): Observable<any> {
    return this.httpClient.get<any>(this.countryUrl, this.httpHeader);
  }

  getHistory(countryName: string, date: string): Observable<any> {
    return this.httpClient.get<any>(
      `${this.historyUrl}?country=${countryName}&day=${date} `,
      this.httpHeader
    );
  }

  getStatistics = (selectedCountry?: string): Observable<any> =>
    selectedCountry !== undefined
      ? this.httpClient.get<any>(
          `${this.statUrl}?country=${selectedCountry}`,
          this.httpHeader
        )
      : this.httpClient.get<any>(this.statUrl, this.httpHeader);
}
