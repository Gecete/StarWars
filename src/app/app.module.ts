import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { ApiSearchService } from './services/api-search.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardComponent
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [ApiSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
