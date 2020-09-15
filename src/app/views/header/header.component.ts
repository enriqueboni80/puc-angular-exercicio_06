
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  moviesFilter = '';
  @Output() filterMovies = new EventEmitter<string>();
  @Output() orderBy = new EventEmitter<void>();

  constructor() { }

  onMoviesFilter(value: string): void {
    this.filterMovies.emit(value);
  }

  onOrderBy(): void {
    this.orderBy.emit()
  }
}
