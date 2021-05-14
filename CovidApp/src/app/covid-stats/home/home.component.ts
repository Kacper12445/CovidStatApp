import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';
import { Country } from '../models/country'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  countryArr : string[] = [] ;
  statisticArr: Country[] = [];
  country!: Country;


  constructor(public statsService: StatsService) { }

  ngOnInit(): void {
  }


  searchDayStat(){
    this.statsService.getHistory('usa','2020-06-02' ).subscribe(resp =>{
      console.log(resp);
    })
  }

  searchStatistics(){
    this.statsService.getStatistics('italy').subscribe(resp =>{
      this.statisticArr = resp.response;
      console.log(this.statisticArr);

    })
  }

  searchCountries(){
    this.statsService.getCountries().subscribe(resp => {
      resp.response.forEach((country: string)=>{
        this.countryArr.push(country);

      })
      console.log(this.countryArr);
    })
  }
}
