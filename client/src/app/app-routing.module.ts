import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {OverviewComponent} from "./overview/overview.component";
import {MenuComponent} from "./menu/menu.component";

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'overview', component: OverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
