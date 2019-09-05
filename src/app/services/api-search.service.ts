import { Injectable } from '@angular/core';
import { Response, RequestOptionsArgs } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IPeople } from "./interfacePeople"
import { IFilms } from './interfaceFilms';

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