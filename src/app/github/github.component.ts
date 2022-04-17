import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  // this.http.get<ApiResponse>().subscribe(data=>{
  //     // Succesful API request
  //     this.github = new GithubService()
  //   },err=>{
  //       this.github = new GithubService()
  //       console.log("An error occurred")
  //   })
  

  // constructor() { }

  ngOnInit(): void {
  }

}
