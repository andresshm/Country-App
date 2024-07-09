import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'countries-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {


 //public countries : Country[] = [];



  constructor(/*private countriesService : CountriesService*/){ }



  searchByCapital(term: string){
    console.log(term);
    /*this.countriesService.searchCapital(term)
    /*.subscribe(countries => {
      this.countries = countries;
    } )*/
  }
}
