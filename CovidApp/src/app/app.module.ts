import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CovidStatsModule } from './covid-stats/covid-stats.module';
import { HistoryComponent } from './apiOperations/history/history.component';
import { StatisticsComponent } from './apiOperations/statistics/statistics.component';
import { CountriesComponent } from './apiOperations/countries/countries.component';
import { SharedModule } from './shared/shared.module';
import { InterceptorInterceptor } from './shared/interceptors/interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    StatisticsComponent,
    CountriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CovidStatsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
