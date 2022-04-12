import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  searchName!:string;
  repos!:Repo[];

  constructor(private dataService:DataServiceService) { }

  
  
  searchUser() {
    this.dataService.getRepos(this.searchName).subscribe(res => {
      this.repos = res;
      // console.log(res)
    })
  }
  

  ngOnInit(): void {
  }

}
