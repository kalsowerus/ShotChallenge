import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminComponent} from "./admin/admin.component";
import {OverviewComponent} from "./overview/overview.component";
import {MenuComponent} from "./menu/menu.component";
import {HttpClientModule} from "@angular/common/http";
import {SlideshowComponent} from "./slideshow/slideshow.component";
import {ProgramKenComponent} from "./program-ken/program-ken.component";
import {FormsModule} from "@angular/forms";
import {HirzefaegerComponent} from "./bands/hirzefaeger/hirzefaeger.component";
import {BirsguggerComponent} from "./bands/birsgugger/birsgugger.component";
import {DonnerwaeschpiComponent} from "./bands/donnerwaeschpi/donnerwaeschpi.component";
import {FuedlichnueblerComponent} from "./bands/fuedlichnuebler/fuedlichnuebler.component";
import {TurboschnaeggaeComponent} from "./bands/turboschnaeggae/turboschnaeggae.component";
import {BandComponent} from "./bands/band.component";
import {BohneschraenzerComponent} from "./bands/bohneschraenzer/bohneschraenzer.component";
import {StritteraeWidlsaeuComponent} from "./bands/striterae-wildsaeu/stritterae-widlsaeu.component";
import {SponsorComponent} from "./sponsors/sponsor.component";
import {AlbinBorerComponent} from "./sponsors/albin-borer/albin-borer.component";
import {RothComponent} from "./sponsors/roth/roth.component";
import {JekerComponent} from "./sponsors/jeker/jeker.component";
import {LackComponent} from "./sponsors/lack/lack.component";
import {SchloessliComponent} from "./sponsors/schloessli/schloessli.component";
import {SeverinBorerComponent} from "./sponsors/severin-borer/severin-borer.component";
import {TreuhandAmtshausComponent} from "./sponsors/treuhand-amtshaus/treuhand-amtshaus.component";
import {WolgemuthComponent} from "./sponsors/wolgemuth/wolgemuth.component";
import {ChlaebberPfluddeComponent} from "./bands/chlaebber-pfludde/chlaebber-pfludde.component";
import {ChrottaeSchlifferComponent} from "./bands/chrottae-schliffer/chrottae-schliffer.component";
import {LadyKillersComponent} from "./bands/lady-killers/lady-killers.component";
import {ProgramBarbieComponent} from "./program-barbie/program-barbie.component";
import {JekerDachComponent} from "./sponsors/jeker-dach/jeker-dach.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    OverviewComponent,
    SlideshowComponent,
    ProgramBarbieComponent,
    ProgramKenComponent,

    // bands
    BandComponent,
    BirsguggerComponent,
    BohneschraenzerComponent,
    ChlaebberPfluddeComponent,
    ChrottaeSchlifferComponent,
    DonnerwaeschpiComponent,
    FuedlichnueblerComponent,
    HirzefaegerComponent,
    LadyKillersComponent,
    StritteraeWidlsaeuComponent,
    TurboschnaeggaeComponent,

    // sponsors
    SponsorComponent,
    AlbinBorerComponent,
    JekerComponent,
    LackComponent,
    RothComponent,
    SchloessliComponent,
    SeverinBorerComponent,
    TreuhandAmtshausComponent,
    WolgemuthComponent,
    JekerDachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
