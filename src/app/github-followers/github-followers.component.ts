import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
=======
>>>>>>> 34c0b72f852555df14c5f2ef8e84303fd6bacb19

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

<<<<<<< HEAD
  constructor(private service: GithubFollowersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    Observable.combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(combined => {
      let id = combined[0].get('id');
      let pageNo = combined[1].get('pageNo');
    });

    this.service.getAll()
      .subscribe(followers => this.followers = followers);
    console.log(this.route.snapshot.queryParamMap);
=======
  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
>>>>>>> 34c0b72f852555df14c5f2ef8e84303fd6bacb19
  }
}
