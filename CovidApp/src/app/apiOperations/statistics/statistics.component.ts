import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Country } from '../../shared/models/country';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass'],
})
export class StatisticsComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  countryCodeArr: any[] = [];
  statisticArr: Country[] = [];
  countryArr: string[] = [];
  codeArr: any[] = [];

  ngOnInit(): void {
    this.searchStatistics();
  }

  countryToCode() {
    this.apiService.getCountryCode().subscribe((resp: any) => {
      resp.forEach((item: any) => {
        // this.countryCodeArr.push(item.alpha2Code);
        this.countryCodeArr.push(item);
      });
      // console.log(this.countryCodeArr);
    });
  }

  searchStatistics() {
    this.apiService.getStatistics().subscribe((resp) => {
      this.statisticArr = resp.response;
      console.log(this.statisticArr);
    });
  }

  getCountryArr() {
    this.apiService.getCountries().subscribe((resp) => {
      resp.response.forEach((item: any) => {
        this.countryArr.push(item);
        // console.log(item);
      });
    });
  }

  codeExchange() {
    this.getCountryArr();
    this.countryToCode();
    console.log(this.countryArr);
    console.log(this.countryCodeArr);
    console.log('co jest');
    let counter = 0;
    for (let i = 0; i < this.countryArr.length; i++) {
      console.log('wchodzi');
      for (let j = 0; j < this.countryCodeArr.length; i++) {
        if (this.countryArr[i] == this.countryCodeArr[j].name) {
          counter++;
        }
      }
    }
    console.log(counter);
  }

  cleanForm() {}
}
