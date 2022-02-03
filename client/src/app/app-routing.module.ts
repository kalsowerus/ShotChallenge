import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {OverviewComponent} from "./overview/overview.component";
import {MenuComponent} from "./menu/menu.component";
import {SlideshowComponent} from "./slideshow/slideshow.component";
import {ProgramComponent} from "./program/program.component";

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'slideshow', component: SlideshowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
