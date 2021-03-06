import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  username: string;

  constructor(private http: HttpClient) {
    console.log('Github Service Ready...');
    this.username = 'maureenndiema';
  }
  getUser() {
    return this.http.get(`https://api.github.com/users/${this.username}`);
  }
  getRepos() {
    return this.http.get(`https://api.github.com/users/${this.username}/repos`);
  }
  updateUser(username: string) {
    this.username = username;
  }
}
