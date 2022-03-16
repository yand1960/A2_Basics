import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeServerComponent } from './time-server/time-server.component';
import { PeopleComponent } from './people/people.component';
import { Repository } from './people/repository';
import { SinglePersonComponent } from './single-person/single-person.component';
import { PersonDetalsComponent } from './person-detals/person-detals.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeServerComponent,
    PeopleComponent,
    SinglePersonComponent,
    PersonDetalsComponent,
    CollapsibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Repository],
  //bootstrap: [AppComponent, TimeServerComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
