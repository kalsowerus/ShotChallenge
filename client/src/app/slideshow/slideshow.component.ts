import {Component, OnInit} from "@angular/core";
import {BehaviorSubject, combineLatest, map, Observable, scan, startWith, Subject} from "rxjs";

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  private nextSlide$ = new Subject<void>();
  public slide$ = this.nextSlide$.pipe(
    startWith(0),
    scan((acc) => acc + 1, 0),
    map(x => x % 2)
  );
  private now$ = new Subject<Date>();
  public showHirzefaeger$ = this.isShow('23:55', '0:15', true);
  public showBirsgugger$ = this.isShow('21:55', '22:15', false);
  public showLaettguuger$ = this.isShow('22:25', '22:45', false);
  public showBuechelgruebler$ = this.isShow('23:25', '23:45', false);
  public showProgram$ = combineLatest([
    this.showHirzefaeger$,
    this.showBirsgugger$,
    this.showLaettguuger$,
    this.showBuechelgruebler$
  ]).pipe(
    map(([showHirzefaeger, showBirsgugger, showLaettguuger, showBuechelgruebler]) =>
      !showHirzefaeger && !showBirsgugger && !showLaettguuger && !showBuechelgruebler),
    startWith(true)
  );

  ngOnInit(): void {
    setInterval(() => this.nextSlide$.next(), 1000);
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

    return this.now$.pipe(
      map(now => now > startDate && now < endDate)
    );
  }
}
