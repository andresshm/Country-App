import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

   private apiUrl:string = 'https://restcountries.com/v3.1';

   public cacheStore : CacheStore= {
    byCapital: { term: '', countries: []},
    byCountries: { term: '', countries: []},
    byRegion: { region: '', countries: []}
   }

  constructor(private httpClient: HttpClient) { }

  private getCountriesRequest(url:string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(()=>of([])),
    );
  }

  searchCapital(term: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCapital={term, countries})
    );
  }

  searchCountry(term: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url);
  }

  searchRegion(term: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${term}`;
    return this.getCountriesRequest(url);
  }


  searchByAlphaCode(code :string): Observable<Country | null>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
    .pipe(map(countries => countries.length > 0 ? countries[0] : null),
  catchError(()=> of(null)))//borra la lista si ya habia algo y luego pongo algo que no encuentra capital

  }
}
