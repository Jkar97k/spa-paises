import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../Services/Countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
    selector: 'app-country-page',
    templateUrl: './country-page.component.html',
    styleUrl: './country-page.component.css',
    standalone: false
})
export class CountryPageComponent  implements OnInit{

  public country?:Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private countrieService:CountriesService,
    private router:Router
  ){}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countrieService.searchCountryByAlphaCode(id))
    )
    .subscribe( resp => {

      if(!resp){return this.router.navigateByUrl('');}

      return this.country = resp;
    })
  }
}
