import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'countries-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule, CountryTableComponent, CountryTableComponent,LoadingSpinnerComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{


 public countries : Country[] = [];
  public isLoading: boolean = false;

public initialValue: string = ''

  constructor(private countriesService : CountriesService){ }




  searchByCapital(term: string){
    this.isLoading=true;
    console.log(term);
    this.countriesService.searchCapital(term)
    .subscribe(countries => {
      this.countries = countries;
      this.isLoading=false;
    } )
  }



  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byCapital.countries;
    this.initialValue=this.countriesService.cacheStore.byCapital.term;
  }


}
