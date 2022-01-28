import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, first, Observable} from "rxjs";
import {Team} from "../team";
import {Shot} from "../shot";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public teams$ = new BehaviorSubject<Team[]>([]);
  public shots$ = new BehaviorSubject<Shot[]>([]);

  private teamId: number = -1;
  private shotId: number = -1;
  private amount: number = -1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/teams').pipe(
      first(),
    ).subscribe((teams: any) => this.teams$.next(teams));

    this.http.get('http://localhost:8080/shots').pipe(
      first()
    ).subscribe((shots: any) => this.shots$.next(shots));
  }

  onTeamChange(teamId: number) {
    this.teamId = teamId;
  }

  onShotChange(shotId: number) {
    this.shotId = shotId;
  }

  onAmountChange(amount: number) {
    this.amount = amount;
  }

  submit() {
    if (this.teamId < 0 || this.shotId < 0 || this.amount < 0) {
      alert("Bitte formular ausüllen");
    }

    this.http.post('http://localhost:8080/shots', {team: this.teamId, shot: this.shotId, amount: this.amount}).pipe(
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
