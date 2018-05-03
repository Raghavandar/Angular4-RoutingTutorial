import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id')); //Different component navigation

    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
    }); //Same component different navigation
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: {'pageNo': 1, 'name': 'qwerty'}
    });
  }

}
