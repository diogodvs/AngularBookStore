import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()


export class BooksService {

  private url = 'http://localhost:8080/api/getAll';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

   constructor( private http: HttpClient){}


    // getBooks(){
    //     return books;
    // }

    getBooks() {
      return this.http.get(this.url)


    }

    

}
