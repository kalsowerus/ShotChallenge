import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, first, map, withLatestFrom} from "rxjs";
import {Team} from "../team";
import {Shot} from "../shot";
import {Rate} from "../rate";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public teams$ = new BehaviorSubject<Team[]>([]);
  public sortedTeams$ = this.teams$.pipe(
    map(teams => teams.sort((a, b) => b.score - a.score)),
    map(teams => teams.map(team => ({...team, shortName: team.name.split(' ')[0], city: team.name.split(' ')[1]})))
  );
  public maxScore$ = this.teams$.pipe(
    map(teams => teams.map(team => team.score).reduce((a, b) => Math.max(a, b), 0)),
    map(maxScore => Math.ceil((maxScore + 1) / 100) * 100)
  );
  public steps$ = this.maxScore$.pipe(
    map(maxScore => [0, maxScore / 4, maxScore / 2, maxScore / 4 * 3, maxScore])
  );
  public scores$ = this.sortedTeams$.pipe(
    withLatestFrom(this.maxScore$),
    map(([teams, maxScore]) => teams.map(team => ({score: team.score, percentage: 100 / maxScore * team.score})))
  );
  public rates$ = new BehaviorSubject<Rate[]>([]);
  public sortedRates$ = this.rates$.pipe(
    map(rates => rates.sort((a, b) => a.name.localeCompare(b.name)))
  );

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    setInterval(() => this.loadValues(), 5000);
    this.loadValues();
  }

  loadValues(): void {
    console.log("loading");
    this.http.get('http://192.168.1.1:8080/teams').pipe(
      first(),
    ).subscribe((teams: any) => this.teams$.next(teams));

    this.http.get('http://192.168.1.1:8080/rates').pipe(
      first()
    ).subscribe((rates: any) => this.rates$.next(rates));
  }
}
