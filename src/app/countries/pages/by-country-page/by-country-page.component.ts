import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'countries-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries : Country[] = [];



  constructor(private countriesService : CountriesService){ }



  searchByCountry(term: string){
    console.log(term);
    this.countriesService.searchCountry(term)
    .subscribe(countries => {
      this.countries = countries;
    } )
  }
}
