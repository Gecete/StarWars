import { Component, Input, SimpleChanges } from '@angular/core';
import { IPeopleResults } from '../../services/interfacePeopleResults';
import { ApiSearchService } from '../../services/api-search.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { HttpClient } from '@angular/common/http';
import { IFilms } from '../../services/interfaceFilms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('character') character: IPeopleResults;
  films:string[];
  filmObj: Object;
  loaded:boolean=false;
  constructor(private apiSearchService: ApiSearchService, private http: HttpClient) {
    
  }

  doSearchFilms(text: string){
   return this.apiSearchService.getFilms(text)
  }

  getAllMovies(films:string[]){
    let list=[];
    films.forEach(element => {
      list.push(this.doSearchFilms(element))
    });
    return Observable.forkJoin(list).subscribe(res => {
      this.filmObj=res;
      this.loaded=true;
  }),
  error => {
    console.log(error);
  },
  () => {
    this.loaded=true;
  }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loaded=false;
    this.getAllMovies(changes.character.currentValue.films);
  }
}