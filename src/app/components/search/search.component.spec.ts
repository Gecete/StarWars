import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ApiSearchService } from '../../services/api-search.service';
import { IPeople } from '../../services/interfacePeople';
import { IPeopleResults } from '../../services/interfacePeopleResults';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let spinner: boolean;

  let resultsPeople1: IPeopleResults = {
    name: "name",
    height: 123,
    mass: 123,
    hair_color: "string",
    skin_color: "string",
    eye_color: "string",
    birth_year: "string",
    gender: "string",
    homeworld: "string",
    films: ["string"],
    species: ["string"],
    vehicles: ["string"],
    starships: ["string"],
    url: "string"
  }
  let data: IPeople = {
    count: 3,
    next: "some url",
    previous: "another url",
    results: [resultsPeople1]
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule],
      providers: [HttpClient, HttpHandler, ApiSearchService]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Some tests
  it("Spinner should not appear if input is empty", function () {
    console.log(component)
    expect(component.spinner).not.toBe(component.textInput == "")
  });

  it("If results are less than 5 dont show 'More button'", function () {
    
    if (component.total > 5) {
      expect(component.show==5).not.toBeTruthy()
    }
  });


});


