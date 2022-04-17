import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: any= [];
  repos: any= [];
  username!: string;
  

  constructor(private _githubService: GithubService) { 
    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this._githubService.getRepos().subscribe(repos => {
      // console.log(user);
      this.repos = repos;
    });
  }
  
  ngOnInit(): void {
  }
  searchUser() {
    this._githubService.updateUser(this.username);
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
    
    this._githubService.getRepos().subscribe(repos => {
    
      this.repos = repos;
    });

  }
}
