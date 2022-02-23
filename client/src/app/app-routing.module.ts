import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {OverviewComponent} from "./overview/overview.component";
import {MenuComponent} from "./menu/menu.component";
import {SlideshowComponent} from "./slideshow/slideshow.component";
import {ProgramComponent} from "./program/program.component";
import {HirzefaegerComponent} from "./bands/hirzefaeger/hirzefaeger.component";
import {BirsguggerComponent} from "./bands/birsgugger/birsgugger.component";
import {LaettguugerComponent} from "./bands/laettguuger/laettguuger.component";
import {BuechelgrueblerComponent} from "./bands/buechelgruebler/buechelgruebler.component";
import {OktavaesumpferComponent} from "./bands/oktavaesumpfer/oktavaesumpfer.component";

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'slideshow', component: SlideshowComponent },
  // bands
  { path: 'hirzefaeger', component: HirzefaegerComponent },
  { path: 'birsgugger', component: BirsguggerComponent },
  { path: 'laettguuger', component: LaettguugerComponent },
  { path: 'buechelgruebler', component: BuechelgrueblerComponent },
  { path: 'oktavaesumpfer', component: OktavaesumpferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
