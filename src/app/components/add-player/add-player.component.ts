import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm: FormGroup;
  teams: any[];
  player: any = {};
  teamId: any;

  constructor(private router: Router, private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe((result) => {
      console.log("here result", result.Teams);
      this.teams = result.Teams;
    })
  }
  addplayer() {
    console.log("player object", this.player);
    this.player.teamId = this.teamId;
    console.log("the id of Team", this.player.teamId);

    //  let playersTab = JSON.parse(localStorage.getItem("players")||"[]");
    //  this.player.id = generateId(playersTab);
    //  playersTab.push (this.player);
    //  localStorage.setItem("players", JSON.stringify(playersTab));

    this.playerService.addPlayer(this.player).subscribe((response) => {
      console.log(response.message, "here player saved with succes");
      this.router.navigate(["admin"]);

    });

  }
  selectteamId(event) {
    console.log("here event", event.target.value);
    console.log("here id from name ", event.target.value);
    this.teamId = event.target.value;
  }


}
