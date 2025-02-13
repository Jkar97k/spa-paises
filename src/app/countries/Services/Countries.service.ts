import { CacheStore } from '../interfaces/cache-store.interfacs';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiURL:string = 'https://restcountries.com/v3.1';

  public cacheStore:CacheStore =
  {
    byCapital:    { term: '', countries:[] },
    byCountries:  { term: '', countries:[] },
    byRegion:     { region: '', countries:[]},
  }

  constructor(private http:HttpClient)
  {
    this.loadLocalStorage();
  }

  private saveLocalStorage()
  {
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore));
  }

  private loadLocalStorage()
  {
    if(!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getCountriesRequest(url:string):Observable<Country[]>
  {
    return this.http.get<Country[]>(url)
    .pipe(
      catchError( error => of([])),
      delay(2000)
    );
  }

  searchCountryByAlphaCode(code:string):Observable<Country | null >
  {
    return this.http.get<Country[]>(`${this.apiURL}/alpha/${code}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null ),
      catchError( error => of(null))
    );
  }

  searchByCapital(query:string):Observable<Country[]>
  {
    const url = `${this.apiURL}/capital/${query}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCapital = {term:query , countries}),
      tap( () => this.saveLocalStorage())
    );
  }

  searchCountry(term:string):Observable<Country[]>
  {
    const url = `${this.apiURL}/name/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byCountries = {term , countries}),
      tap( () => this.saveLocalStorage())
    );
  }

  searchRegion(term:Region):Observable<Country[]>
  {
    const url = `${this.apiURL}/region/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byRegion = {region:term , countries}),
      tap( () => this.saveLocalStorage())
    );
  }
}
