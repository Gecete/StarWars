import { Injectable } from '@angular/core';
import { Response, RequestOptionsArgs } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IPeople } from "./interfacePeople"
import { IFilms } from './interfaceFilms';
// This service is incharged of all the API calls. 
// There are 2 different endpoints to fetch characters and to fetch films
@Injectable()
export class ApiSearchService {


    private headers: Headers = new Headers();
    private requestOptions: RequestOptionsArgs = {};
    private apiServer: string = "https://swapi.co/api/";
    
    constructor(private http: HttpClient) {

    }

    get(endPoint: string): Observable<IPeople> {
        return this.http.get<IPeople>(this.createUrl(endPoint));
    }
// Endpoint is directly the URL provided by the API from previous query to /people/
    getFilms(endPoint: string): Observable<IFilms> {
        return this.http.get<IFilms>(endPoint);
    }

    createUrl(endPoint): string {

        let url = this.apiServer + endPoint;
        if (!endPoint.startsWith('/')) {
            url = this.apiServer + 'people/?search=' + endPoint;
        }
        return url;
    }

}