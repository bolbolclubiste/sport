import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
 
  players: any= [];

  constructor(private router:Router, private playerService:PlayerService) { }

  ngOnInit()  {
    this.playerService.getAllPlayers().subscribe((response)=>{
      this.players = response.players;
      console.log(response.message);
    })
      
  }

  update (obj:any){
    this.players=obj;
  }
  display(x:number){
    this.router.navigate([`player-info/${x}`]);

  }
  edit(x:number){ 
    this.router.navigate([`edit-player/${x}`]);
    
  }
  delete(x:number){
  //   for (let i = 0; i < this.players.length; i++) {
  //   if (this.players[i].id == x) {
  //     this.players.splice(i,1);
  //     break;
  //   }  
      
  //   }
    
  // }
  this.playerService.deletePlayer(x).subscribe((response)=>{
    alert(response.message);
    this.playerService.getAllPlayers().subscribe((response) => {
      this.players=response.message;
      console.log(response.message);
      this.router.navigate(["admin"]);
      })
  }); 
  
  } 
}
