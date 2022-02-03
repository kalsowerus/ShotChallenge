import {Component, OnInit} from "@angular/core";
import {BehaviorSubject, map, scan, startWith, Subject} from "rxjs";

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

  ngOnInit(): void {
    setInterval(() => this.nextSlide$.next(), 1000)
  }

}
