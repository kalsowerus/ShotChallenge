import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminComponent} from "./admin/admin.component";
import {OverviewComponent} from "./overview/overview.component";
import {MenuComponent} from "./menu/menu.component";
import {HttpClientModule} from "@angular/common/http";
import {SlideshowComponent} from "./slideshow/slideshow.component";
import {ProgramComponent} from "./program/program.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    OverviewComponent,
    SlideshowComponent,
    ProgramComponent
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
