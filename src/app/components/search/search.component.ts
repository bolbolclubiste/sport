import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';
import { UserService } from 'src/app/services/user.service';
@Component({
selector: 'app-search',
templateUrl: './search.component.html',
styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchTeamName: FormGroup;
search: any = {};
result: [];
constructor(private matchService: MatchService , private UserService:UserService) { }

ngOnInit() {
}
// Composant Angular
searchTeamOne() {
this.matchService.searchMatch(this.search.teamOne).subscribe(
(response) => {
this.result = response.match;
},
(error) => {
console.error('Error while searching:', error);
}
);
}
}

