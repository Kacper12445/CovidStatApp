import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './apiOperations/countries/countries.component';
import { HistoryComponent } from './apiOperations/history/history.component';
import { StatisticsComponent } from './apiOperations/statistics/statistics.component';
import { HomeComponent } from './covid-stats/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'statistics', component: StatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
