import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Repo } from '../repo';
import { Users } from '../users';

declare function scrollPage():void;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users!:Users;
  repos!:Repo[];

  constructor(private dataService:DataServiceService) { }

  searchName = 'mash14';

  ngOnInit(): void {
    
    this.dataService.getUsers(this.searchName).subscribe((data:any) => {
      // console.log(data);
      this.users = data;
    })

    this.dataService.getRepos(this.searchName).subscribe(res => {
      this.repos = res;
      // console.log(res)
    })

    scrollPage();
  }

}
