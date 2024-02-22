import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  constructor( private activateRoute:ActivatedRoute, teamService:TeamService) { }

  ngOnInit() {
    // this.id=this.activateRoute.snapshot.paramMap.get('id');
    // this.teamService.getTeamById(this.id).subscribe((response)=>{
    //   this.team=response.team; 
    // })
  }

}
