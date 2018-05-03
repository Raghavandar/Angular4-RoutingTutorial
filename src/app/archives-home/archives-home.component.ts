import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archives-home',
  templateUrl: './archives-home.component.html',
  styleUrls: ['./archives-home.component.css']
})
export class ArchivesHomeComponent implements OnInit {

  private archives;

  constructor() { }

  ngOnInit() {
    this.archives = [{'month': 5, 'year': 2017},
                    {'month': 7, 'year': 2017},
                    {'month': 9, 'year': 2017}];
  }

}
