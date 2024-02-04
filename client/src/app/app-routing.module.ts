import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {OverviewComponent} from "./overview/overview.component";
import {MenuComponent} from "./menu/menu.component";
import {SlideshowComponent} from "./slideshow/slideshow.component";
import {ProgramKenComponent} from "./program-ken/program-ken.component";
import {HirzefaegerComponent} from "./bands/hirzefaeger/hirzefaeger.component";
import {BirsguggerComponent} from "./bands/birsgugger/birsgugger.component";
import {DonnerwaeschpiComponent} from "./bands/donnerwaeschpi/donnerwaeschpi.component";
import {FuedlichnueblerComponent} from "./bands/fuedlichnuebler/fuedlichnuebler.component";
import {TurboschnaeggaeComponent} from "./bands/turboschnaeggae/turboschnaeggae.component";
import {AlbinBorerComponent} from "./sponsors/albin-borer/albin-borer.component";
import {JekerComponent} from "./sponsors/jeker/jeker.component";
import {LackComponent} from "./sponsors/lack/lack.component";
import {RothComponent} from "./sponsors/roth/roth.component";
import {SchloessliComponent} from "./sponsors/schloessli/schloessli.component";
import {SeverinBorerComponent} from "./sponsors/severin-borer/severin-borer.component";
import {TreuhandAmtshausComponent} from "./sponsors/treuhand-amtshaus/treuhand-amtshaus.component";
import {WolgemuthComponent} from "./sponsors/wolgemuth/wolgemuth.component";
import {ProgramBarbieComponent} from "./program-barbie/program-barbie.component";
import {BohneschraenzerComponent} from "./bands/bohneschraenzer/bohneschraenzer.component";
import {ChlaebberPfluddeComponent} from "./bands/chlaebber-pfludde/chlaebber-pfludde.component";
import {ChrottaeSchlifferComponent} from "./bands/chrottae-schliffer/chrottae-schliffer.component";
import {LadyKillersComponent} from "./bands/lady-killers/lady-killers.component";
import {StritteraeWidlsaeuComponent} from "./bands/striterae-wildsaeu/stritterae-widlsaeu.component";

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'program-barbie', component: ProgramBarbieComponent },
  { path: 'program-ken', component: ProgramKenComponent },
  { path: 'slideshow', component: SlideshowComponent },

  // bands
  { path: 'birsgugger', component: BirsguggerComponent },
  { path: 'bohneschraenzer', component: BohneschraenzerComponent },
  { path: 'chlaebber-pfludde', component: ChlaebberPfluddeComponent },
  { path: 'chrottae-schliffer', component: ChrottaeSchlifferComponent },
  { path: 'donnerwaeschpi', component: DonnerwaeschpiComponent },
  { path: 'fuedlichnuebler', component: FuedlichnueblerComponent },
  { path: 'hirzefaeger', component: HirzefaegerComponent },
  { path: 'lady-killers', component: LadyKillersComponent },
  { path: 'stritterae-wildsaeu', component: StritteraeWidlsaeuComponent },
  { path: 'turboschnaeggae', component: TurboschnaeggaeComponent },

  // sponsors
  { path: 'albin-borer', component: AlbinBorerComponent },
  { path: 'jeker', component: JekerComponent },
  { path: 'lack-storen', component: LackComponent },
  { path: 'roth', component: RothComponent },
  { path: 'schloessli', component: SchloessliComponent },
  { path: 'severin-borer', component: SeverinBorerComponent },
  { path: 'treuhand-amtshaus', component: TreuhandAmtshausComponent },
  { path: 'wolgemuth', component: WolgemuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
