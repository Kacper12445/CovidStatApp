import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './layouts/nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, NavComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavComponent],
})
export class SharedModule {}
