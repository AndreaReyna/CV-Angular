import { Component, OnInit } from '@angular/core';
import { Headline } from './headline';
import { HeadlineService } from './headline.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headline.component.html'
})
export class HeadlinesComponent implements OnInit {
 
  headlines!:Headline[];

  constructor(private headlineService:HeadlineService) { }

  ngOnInit(): void {
    
    this.headlineService.getAll().subscribe(
      headline => this.headlines=headline
      );
  }
}