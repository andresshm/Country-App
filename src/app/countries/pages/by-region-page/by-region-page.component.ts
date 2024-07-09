import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CommonModule } from '@angular/common';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent, CommonModule],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries : Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesService : CountriesService){ }



  searchByRegion(region: Region){
    this.selectedRegion = region
    this.countriesService.searchRegion(region)
    .subscribe(countries => {
      this.countries = countries;
    } )
  }
}
