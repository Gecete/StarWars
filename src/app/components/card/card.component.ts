import { Component, Input, SimpleChanges } from '@angular/core';
import { IPeopleResults } from '../../services/interfacePeopleResults';
import { ApiSearchService } from '../../services/api-search.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { IFilms } from '../../services/interfaceFilms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
// This component shows a card with information from the selected character
// Recieves the data through its input 'character' and shows it in the screen
// It does another serve query to get all the movie titles where the character has appeared.
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
  constructor(private apiSearchService: ApiSearchService) {
    
  }

  doSearchFilms(text: string){
   return this.apiSearchService.getFilms(text)
  }

  //ForkJoin to and subscription to get all data at ones when all request have finished
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