import { Component, OnInit } from '@angular/core';
import {  faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {
  arrowLeft = faAngleLeft;
  arrowRight = faAngleRight;

  constructor() { }

  ngOnInit(): void {
  }

}
