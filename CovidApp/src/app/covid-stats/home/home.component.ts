import { Component, OnInit } from '@angular/core';
import { Country } from '../../shared/models/country';
import { ApiService } from 'src/app/shared/services/api.service';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  countryArr: string[] = [];
  statisticArr: Country[] = [];
  country!: Country;

  data$!: Observable<any>;

  worldStats = {
    confirmed: 0,
    critical: 0,
    deaths: 0,
    recovered: 0,
    lastChange: '',
    lastUpdate: '',
  };

  constructor(public apiService: ApiService) {
    // this.setTotalStats();
    this.refreshData();
  }

  ngOnInit(): void {}

  setTotalStats() {
    this.apiService.getTotalStats().subscribe((resp) => {
      this.worldStats = resp[0];
      console.log(this.worldStats);
    });
  }

  searchDayStat() {
    this.apiService.getHistory('usa', '2020-06-02').subscribe((resp) => {
      console.log(resp);
    });
  }

  searchStatistics() {
    this.apiService.getStatistics('').subscribe((resp) => {
      this.statisticArr = resp.response;
      console.log(this.statisticArr);
    });
  }

  searchCountries() {
    this.apiService.getCountries().subscribe((resp) => {
      resp.response.forEach((country: string) => {
        this.countryArr.push(country);
      });
      console.log(this.countryArr);
    });
  }

  refreshData() {
    timer(500).subscribe(() => {
      this.setTotalStats();
    });
  }
}
