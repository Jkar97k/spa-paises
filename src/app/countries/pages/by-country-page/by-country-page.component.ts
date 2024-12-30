import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../Services/Countries.service';

@Component({
    selector: 'app-by-country-page',
    templateUrl: './by-country-page.component.html',
    styleUrl: './by-country-page.component.css',
    standalone: false
})
export class ByCountryPageComponent implements OnInit{

  public countries:Country[] = [];
  public tableHeader:string[] = ['#','Icon','Bandera','Nombre','Capital','Poblacion','...'];
  public isload: boolean = false;
  public initialTerm: string = '';

  constructor(private countriesService:CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialTerm = this.countriesService.cacheStore.byCountries.term;
  }

  public title:string = 'Buscar por Pais';

  searchByCountry(term:string):void
  {
    this.isload = true;
    this.countriesService.searchCountry(term).subscribe
    ( resp =>{
      this.countries = resp;
      this.isload = false;
    })

  }
}
