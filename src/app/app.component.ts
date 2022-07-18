import { Component } from '@angular/core';
import { ChapterService } from './chapter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chapters = [];

  constructor(private chapterService: ChapterService){
    this.chapterService.getChapters().subscribe(res => {
      this.chapters = res;
    })
  }

 
}
