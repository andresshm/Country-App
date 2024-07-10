import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'countries-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent, LoadingSpinnerComponent, CommonModule],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{
  public countries : Country[] = [];
  public isLoading : boolean = false;
public initialValue: string = ''

  constructor(private countriesService : CountriesService){ }




  searchByCountry(term: string){
    this.isLoading=true;
    console.log(term);
    this.countriesService.searchCountry(term)
    .subscribe(countries => {
      this.countries = countries;
      this.isLoading=false;
    } )
  }



  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byCountries.countries;
    this.initialValue=this.countriesService.cacheStore.byCountries.term;
  }


}
