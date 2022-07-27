import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"

export const books: Book[] = [
  { id: '1', name: 'Book1' , price: 11, quantity: 1, category: "Acao", img:"img1"},
  { id: '2', name: 'Book2' , price: 13, quantity: 1, category: "Acao", img:"img2"},
  { id: '3', name: 'Book3' , price: 14, quantity: 1, category: "Acao", img:"img3"},
  { id: '3', name: 'Book4' , price: 15, quantity: 1, category: "Acao", img:"img4"},
];




@Injectable()

export class BookService{

  private url = "https://sheet.best/api/sheets/36a43c04-5304-4744-87f4-56ead318565a";

  HttpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http: HttpClient) {

  }

  /*
  getBooks: any = {
    return: this.books}
  */

  getBook(){
    return this.http.get(this.url)
  }



}
