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
    map(teams => teams.map(team => {
      const split = team.name.split(' ');
      return {
        ...team,
        shortName: split.slice(0, -1).join(' '),
        city: split[split.length - 1]
      };
    }))
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
    map(([teams, maxScore]: [Team[], number]) =>
      teams.map(team => ({score: team.score, percentage: 100 / maxScore * team.score}))
    )
  );

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    setInterval(() => this.loadValues(), 5000);
    this.loadValues();
  }

  loadValues(): void {
    console.log("loading");
    this.http.get('http://localhost:8080/teams').pipe(
      first(),
    ).subscribe((teams: any) => this.teams$.next(teams));
  }
}
