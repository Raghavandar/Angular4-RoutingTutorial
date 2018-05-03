import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archives-profile',
  templateUrl: './archives-profile.component.html',
  styleUrls: ['./archives-profile.component.css']
})
export class ArchivesProfileComponent implements OnInit {

  month;
  year;

  constructor(private router: Router, 
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.month = this.route.snapshot.params['month'];
    this.year = this.route.snapshot.params['year'];
  }

  viewAll() {
    this.router.navigate(['/archivesHome']);
  }

}
