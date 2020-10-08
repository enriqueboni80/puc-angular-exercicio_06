import { Component, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {

  moviesFilter = '';
  @Output() filterMovies = new EventEmitter<string>();
  @Output() orderBy = new EventEmitter<string>();

  constructor() { }

  onMoviesFilter(value: string): void {
    this.filterMovies.emit(value);
  }

  onOrderBy(orderField: string): void {
    this.orderBy.emit(orderField)
  }

}
