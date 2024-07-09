import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { SearchBoxComponent } from '../shared/components/search-box/search-box.component';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SearchBoxComponent,
    LoadingSpinnerComponent
  ],
  exports:[
    LoadingSpinnerComponent
  ]
})
export class CountriesModule { }
