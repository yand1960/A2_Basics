import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PersonDetalsComponent } from './person-detals/person-detals.component';
import { SinglePersonComponent } from './single-person/single-person.component';
import { TimeServerComponent } from './time-server/time-server.component';

const routes: Routes = [
  {path: "time", component: TimeServerComponent},
  {path: "people", component: PeopleComponent},
  {path: "person/:id", component: PersonDetalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
