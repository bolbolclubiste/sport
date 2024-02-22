import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl: string = "http://localhost:3000/teams";
  constructor(private httpClient: HttpClient) { }

  addTeam(obj) {
    console.log("here the object from the FE", obj);
    return this.httpClient.post<{ message: string }>(this.teamUrl, obj);

  }
  getAllTeams() {
    return this.httpClient.get<{ Teams: any, message: string }>(this.teamUrl);

  }
  getTeamById(id) {
    return this.httpClient.get<{}>(`${this.teamUrl}/${id}`);
  }
  updateTeam(newObj) {
    return this.httpClient.put<{}>(this.teamUrl, newObj);
  }
  deleteTeam(id) {
    return this.httpClient.delete<{}>(`${this.teamUrl}/${id}`);
  }
  getPlayersbyTeam(id) {
    console.log(id);
    return this.httpClient.get<{team: any}>(`${this.teamUrl}/${id}/players`);
  }

}

