import {Component} from "@angular/core";
import {map, scan, startWith, Subject} from "rxjs";
import {Sponsor} from "./sponsor";

@Component({
  selector: 'app-sponsor',
  templateUrl: 'sponsor.component.html',
  styleUrls: ['sponsor.component.scss']
})
export class SponsorComponent {
  public readonly Sponsor = Sponsor;
  public readonly next$ = new Subject<void>();
  private readonly sponsors = [
    Sponsor.ALBIN_BORER,
    Sponsor.JEKER,
    Sponsor.LACK,
    Sponsor.ROTH,
    Sponsor.SCHLOESSLI,
    Sponsor.SEVERIN_BORER,
    Sponsor.TREUHAND_AMTSHAUS,
    Sponsor.WOLGEMUTH,
    Sponsor.JEKER_DACH
  ];
  public sponsor$ = this.next$.pipe(
    startWith(0),
    scan((acc) => acc + 1, 0),
    map((current: number) => {
      current = current % this.sponsors.length;
      console.log(this.sponsors[current])
      return this.sponsors[current];
    })
  );
}
