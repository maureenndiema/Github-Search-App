import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  username: string;

  

  constructor(private http:HttpClient) { 
    console.log('Github Service Ready...');
    this.username =  'maureenndiema';

  }
  getUser() {
    return this.http.get(`https://api.github.com/users/${this.username}?client_id=${environment.clientID}&client_secret=${environment.apiKey}`)
    // .map(result => result);

  }
  getRepos() {
    return this.http.get(`https://api.github.com/users/${this.username}/repos?client_id=${environment.clientID}&client_secret=${environment.apiKey}`)
    // .map(result => result);
}
updateUser(username: string) {
  this.username = username;
}
}
