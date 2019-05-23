import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError} from 'rxjs/operators';
import { EMPTY} from 'rxjs';
// Router
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// Service
import { GithubService } from 'src/app/services/github.service';
// Model
import { User } from 'src/app/models/user.model';
import { Repos } from 'src/app/models/repos.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private githibservice: GithubService , private router: Router, private route: ActivatedRoute,) { }
  search = new FormControl();
  error: boolean = false;
  user: User = null;
  repos: Repos = null;

  ngOnInit() {
    // Get param name User
    this.search.setValue(this.route.snapshot.paramMap.get('id'));
    this.searchUser();
  }
  // We call the function to search for a user
  onSubmit() {
    this.searchUser();
  }

  searchUser() {
    // search User
    this.githibservice.getUser(this.search.value)
      .pipe(
          catchError(err => {
            this.user = null;
            this.error = true;
            return EMPTY;
              })
          ).subscribe( user => {
            this.user = user;
            this.error = false;
            // Search Repos
            this.githibservice.getRepos(user.login).pipe(
              catchError(err => {
                          this.user = null;
                          this.error = true;
                          return EMPTY;
                        } )
            ).subscribe(data => this.repos = data)
          });
  }
}
