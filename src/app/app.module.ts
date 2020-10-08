import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieComponent } from './views/movie/movie.component';
import { MovieItemComponent } from './views/movie/movie-item/movie-item.component';
import { HeaderComponent } from './views/header/header.component';
import { MovieDetailComponent } from './views/movie/movie-detail/movie-detail.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './views/search-bar/search-bar.component';
import { AboutComponent } from './views/about/about.component';
import { FooterComponent } from './views/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieItemComponent,
    HeaderComponent,
    MovieDetailComponent,
    SearchBarComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
