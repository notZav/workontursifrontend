import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor( 
    private http: HttpClient
  ) { }

  getChapters() {
    return this.http.get<any>('http://localhost:8080/getAllChapterNames');
  }
}
