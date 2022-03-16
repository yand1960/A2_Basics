import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person, Repository } from '../people/repository';

@Component({
  selector: 'app-person-detals',
  templateUrl: './person-detals.component.html',
  styleUrls: ['./person-detals.component.less']
})
export class PersonDetalsComponent implements OnInit {

  person: Person;

  //Инжекция ActivatedRoute позволяет найти парамерты url запроса
  //См. файл app-routing.module.ts как определить маршрут с параметром
  constructor(repository: Repository, route: ActivatedRoute) { 
    let id = Number(route.snapshot.paramMap.get("id"));
    this.person = repository.people.filter(p => p.id == id)[0];
  }

  ngOnInit(): void {
  }

}
