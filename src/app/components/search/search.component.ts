import { Component, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { ApiSearchService } from '../../services/api-search.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { IPeopleResults } from '../../services/interfacePeopleResults';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ApiSearchService]
})
export class SearchComponent {
  @Input('textInput') textInput: string;
  @Output() character: EventEmitter<IPeopleResults> = new EventEmitter();
  results: IPeopleResults[];
  show: number = 5;
  total: number = 0;
  noResults:boolean=false;
  spinner: boolean = false;
  click: boolean = true;
  delay: number = 300;
  message = "";
  constructor(private apiSearchService: ApiSearchService, private elementRef: ElementRef) {
    const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.textInput)
      .debounceTime(this.delay)
      .distinctUntilChanged();

    eventStream.subscribe(input => {
      this.show = 5;
      this.click=true;
      this.noResults=false;
      this.spinner = true;
      if (this.textInput) {
        this.doSearch(this.textInput)
      }
    });
  }
  selected = (value: IPeopleResults) => {
    this.textInput=value.name;
    this.click = !this.click;
    this.character.emit(value)
  }

  hideNoResults = () => {
    this.noResults=false;
  }

    showAll = () => {
    this.show = (this.results.length);
  }
  doSearch = (text: string) => {
    this.apiSearchService.get(text)
      .subscribe(value => {
        this.spinner = false;
        if(value.results.length!=0){
          this.results = value.results;
          this.noResults=false;
       }else{
         //show no results found
         this.noResults=true;
         this.results=[];
       }
        this.total = value.count;
      }),
      error => {
        console.log(error);
      },
      () => {
        this.spinner = false;
      }
  }


}