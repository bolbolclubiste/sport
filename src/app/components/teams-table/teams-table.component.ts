import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
teamsTab:any=[];
  constructor(private router:Router , private teamService:TeamService) { }

  ngOnInit() {
    // this.teams=JSON.parse(localStorage.getItem("teams") || "[]");
    this.teamService.getAllTeams().subscribe((response)=>{
      this.teamsTab=response.Teams;
      console.log(response.message);
  
    });

  }

  update(obj:any) {
    this.teamsTab=obj;
  }
  display(x:number){
    this.router.navigate([`teamInfo/${x}`]);
  }
  edit(x:number){
    this.router.navigate([`editTeam/${x}`]);

  }
  delete(x:number){
    for (let i = 0; i < this.teamsTab.length; i++) {
    if (this.teamsTab[i].id == x) {
      this.teamsTab.splice(i,1);
      break;
    }  
      
    }
    localStorage.setItem("teams",JSON.stringify(this.teamsTab));
  }
}