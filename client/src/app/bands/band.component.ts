import {Component, OnInit} from "@angular/core";
import {BehaviorSubject, map, Observable} from "rxjs";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-band',
  templateUrl: 'band.component.html',
  styleUrls: ['band.component.scss']
})
export class BandComponent implements OnInit {
  private now$ = new BehaviorSubject<Date>(new Date());

  public donnerwaeschpi$ = this.isShow('20:28', '20:52', false);
  public birsgugger$ = this.isShow('20:58', '21:22', false);
  public ladyKillers$ = this.isShow('21:28', '21:52', false);
  public hirzefaeger$ = this.isShow('21:58', '22:22', false);
  public stritteraeWildsaeu$ = this.isShow('22:28', '22:52', false);
  public bohneschraenzer$ = this.isShow('22:58', '23:22', false);
  public fuedlichnuebler$ = this.isShow('23:28', '23:52', false);
  public chrottaeSchliffer$ = this.isShow('23:58', '0:22', true);
  public chlaebberPfludde$ = this.isShow('0:28', '0:52', false);
  public turboSchnaeggae$ = this.isShow('0:58', '1:22', false);

  public isActive$ = combineLatest([
    this.birsgugger$,
    this.bohneschraenzer$,
    this.chlaebberPfludde$,
    this.chrottaeSchliffer$,
    this.donnerwaeschpi$,
    this.fuedlichnuebler$,
    this.hirzefaeger$,
    this.ladyKillers$,
    this.stritteraeWildsaeu$,
    this.turboSchnaeggae$
  ]).pipe(
    map((values: boolean[]) => values.some(bool => bool))
  );

  ngOnInit(): void {
    setInterval(() => this.now$.next(new Date()), 10000);
  }

  private isShow(startTime: string, endTime: string, endTimeTomorrow: boolean): Observable<boolean> {
    const startDate = new Date();
    const endDate = new Date();

    const startTimes = startTime.split(':');
    startDate.setHours(+startTimes[0]);
    startDate.setMinutes(+startTimes[1]);
    startDate.setSeconds(0);

    const endTimes = endTime.split(':');
    endDate.setHours(+endTimes[0]);
    endDate.setMinutes(+endTimes[1]);
    endDate.setSeconds(0);
    if (endTimeTomorrow) {
      endDate.setDate(endDate.getDate() + 1);
    }

    const startDate2 = new Date(startDate);
    startDate2.setDate(startDate2.getDate() - 1);
    const endDate2 = new Date(endDate);
    endDate2.setDate(endDate2.getDate() - 1);

    return this.now$.pipe(
      map(now => (now > startDate && now < endDate) || (now > startDate2 && now < endDate2))
    );
  }
}
