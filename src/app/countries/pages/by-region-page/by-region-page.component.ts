import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../Services/Countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit {

  public regions:Country[] = [];
  public tableHeader:string[] = ['#','Bandera','Nombre','Capital','Poblacion','...'];
  public isload: boolean = false;
  public list:Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?:Region;

  constructor(private countriesService:CountriesService) {}


  ngOnInit(): void {
    this.regions = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  public title:string = 'buscar por Region';

  searchRegion(term:Region):void
  {
    this .selectedRegion = term;

    this.isload = true;
    this.countriesService.searchRegion(term).subscribe
    ( resp =>{
      this.regions = resp;
      this.isload = false;
    })
  }

}
