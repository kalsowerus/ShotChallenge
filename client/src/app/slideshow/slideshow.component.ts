import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {
  BehaviorSubject,
  combineLatest,
  map,
  ReplaySubject,
  scan,
  startWith,
  Subject,
  takeUntil,
  withLatestFrom
} from "rxjs";
import {Slide} from "./slide";
import {BandComponent} from "../bands/band.component";
import {SponsorComponent} from "../sponsors/sponsor.component";

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  private readonly destroy$ = new ReplaySubject<void>();

  @ViewChild(BandComponent)
  public band!: BandComponent;
  private bandIsActive$ = new BehaviorSubject(false);

  @ViewChild(SponsorComponent)
  public sponsor!: SponsorComponent;

  public readonly Slide = Slide;

  private nextSlide$ = new Subject<void>();
  private currentSlides$ = combineLatest([
    this.bandIsActive$
  ]).pipe(
    map(([bandActive]) => {
      const slides = [Slide.OVERVIEW, Slide.PROGRAM_BARBIE, Slide.PROGRAM_KEN, Slide.SPONSOR];
      if (bandActive) slides.push(Slide.BAND);
      return slides;
    })
  );
  public slide$ = this.nextSlide$.pipe(
    startWith(0),
    scan((acc) => acc + 1, 0),
    withLatestFrom(this.currentSlides$),
    map(([counter, slides]: any) => {
      counter = counter % slides.length;
      const slide = slides[counter];
      if (slide === Slide.SPONSOR) this.sponsor.next$.next();
      return slide;
    })
  );

  ngOnInit(): void {
    setInterval(() => this.nextSlide$.next(), 10 * 1000 /* 10s */);
  }

  ngAfterViewInit(): void {
    this.band.isActive$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isActive => this.bandIsActive$.next(isActive));
  }
}
