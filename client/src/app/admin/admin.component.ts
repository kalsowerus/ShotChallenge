import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, first, Observable} from "rxjs";
import {Team} from "../team";
import {Shot} from "../shot";
import {BACKEND_HOST} from "../constants";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public teams$ = new BehaviorSubject<Team[]>([]);

  private teamId: number = -1;
  private amount: number = -1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`http://${BACKEND_HOST}:8080/teams`).pipe(
      first(),
    ).subscribe((teams: any) => this.teams$.next(teams));
  }

  onTeamChange(teamId: number) {
    this.teamId = teamId;
  }

  onAmountChange(amount: number) {
    this.amount = amount;
  }

  submit() {
    if (this.teamId < 0 || this.amount < 0) {
      alert("Bitte formular ausüllen");
    }

    this.http.post(`http://${BACKEND_HOST}:8080/shots`, {team: this.teamId, amount: this.amount}).pipe(
      first()
    ).subscribe(result => {
      if (result) {
        window.location.reload();
      } else {
        alert("Something went wrong");
      }
    });
  }
}
