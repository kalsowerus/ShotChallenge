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
import {HirzefaegerComponent} from "./bands/hirzefaeger/hirzefaeger.component";
import {BirsguggerComponent} from "./bands/birsgugger/birsgugger.component";
import {LaettguugerComponent} from "./bands/laettguuger/laettguuger.component";
import {BuechelgrueblerComponent} from "./bands/buechelgruebler/buechelgruebler.component";
import {OktavaesumpferComponent} from "./bands/oktavaesumpfer/oktavaesumpfer.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    OverviewComponent,
    SlideshowComponent,
    ProgramComponent,
    HirzefaegerComponent,
    BirsguggerComponent,
    LaettguugerComponent,
    BuechelgrueblerComponent,
    OktavaesumpferComponent
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
