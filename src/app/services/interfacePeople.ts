import {IPeopleResults} from "./interfacePeopleResults"

export interface IPeople {
        count: number, 
        next: string, 
        previous: string, 
        results: [IPeopleResults]
    }
