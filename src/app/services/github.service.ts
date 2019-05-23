import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Repos } from '../models/repos.model';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUser(name: string): Observable<User> {
    const url = `https://api.github.com/users/${name}`;

    return this.http.get<User>(url);
  }

  getRepos(name: string):Observable<Repos>{
    const url =`https://api.github.com/users/${name}/repos`;

    return this.http.get<Repos>(url);
  }
}
