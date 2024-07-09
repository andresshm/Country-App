import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-table.component.html',
  styles: [
    `
    img {
      width:25px;
    }
    `
  ]
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];
}
