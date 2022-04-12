import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Repo } from '../repo';
import { Users } from '../users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users!:Users;
  repos!:Repo[];

  constructor(private dataService:DataServiceService) { }

  searchName!:string;
  
  searchUser() {
    this.dataService.getUsers(this.searchName).subscribe((data:any) => {
      // console.log(data);
      this.users = data;
    })

    this.dataService.getRepos(this.searchName).subscribe(res => {
      this.repos = res;
      // console.log(res)
    })
  }
  

  ngOnInit(): void {
   
  }
  
  }


