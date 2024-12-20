import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../Services/Countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit{

  public capitals:Country[] = [];
  public tableHeader:string[] = ['#','Icon','Bandera','Nombre','Capital','Poblacion','...'];
  public isload: boolean = false;
  public initialTerm: string = '';

  constructor(private countriesService:CountriesService) {}

  ngOnInit(): void {
    this.capitals = this.countriesService.cacheStore.byCapital.countries;
    this.initialTerm = this.countriesService.cacheStore.byCapital.term;
  }

  public title:string = 'buscar por capital';

  searchByCapital(term:string):void
  {
    this.isload = true;

    this.countriesService.searchByCapital(term).subscribe
    ( resp =>{
      this.capitals = resp;
      this.isload = false;
    });
  }
}
