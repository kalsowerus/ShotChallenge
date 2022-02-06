import {Component, OnInit} from "@angular/core";
import {BehaviorSubject, combineLatest, map, Observable, scan, startWith, Subject, withLatestFrom} from "rxjs";
import {Slide} from "./slide";

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  public readonly Slide = Slide;

  private now$ = new BehaviorSubject<Date>(new Date());
  public showHirzefaeger$ = this.isShow('11:55', '22:30', false);
  public showBirsgugger$ = this.isShow('0:55', '1:30', false);
  public showLaettguuger$ = this.isShow('20:55', '21:30', false);
  public showBuechelgruebler$ = this.isShow('23:55', '0:30', true);
  public showOktavaesumpfer$ = this.isShow('22:55', '23:30', false);
  private nextSlide$ = new Subject<void>();
  private currentSlides$ = combineLatest([
    this.showHirzefaeger$,
    this.showBirsgugger$,
    this.showLaettguuger$,
    this.showBuechelgruebler$,
    this.showOktavaesumpfer$
  ]).pipe(
    map(([showHirzefaeger, showBirsgugger, showLaettguuger, showBuechelgruebler, showOktavaesumpfer]) => {
      const slides = [Slide.OVERVIEW, Slide.PROGRAM];
      if (showHirzefaeger) slides.push(Slide.HIRZEFAEGER);
      if (showBirsgugger) slides.push(Slide.BIRSGUGGER);
      if (showLaettguuger) slides.push(Slide.LAETTGUUGER);
      if (showBuechelgruebler) slides.push(Slide.BUECHELGRUEBLER);
      if (showOktavaesumpfer) slides.push(Slide.OKTAVAESUMPFER);
      return slides;
    })
  );
  public slide$ = this.nextSlide$.pipe(
    startWith(0),
    scan((acc) => acc + 1, 0),
    withLatestFrom(this.currentSlides$),
    map(([counter, slides]) => {
      counter = counter % slides.length;
      return slides[counter];
    })
  );

  ngOnInit(): void {
    setInterval(() => this.nextSlide$.next(), 10000);
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
