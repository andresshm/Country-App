import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { SearchBoxComponent } from '../shared/components/search-box/search-box.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SearchBoxComponent,
  ]
})
export class CountriesModule { }
