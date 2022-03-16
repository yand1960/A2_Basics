import { Component, OnInit } from '@angular/core';
import { Person, Repository } from './repository';

// 1. Показ множественных данных. См файлы repository.ts и шаблон people.component.html
// 2. Настройка маршрутизации (в стиле SPA). См. app-routing.module.ts и app.component.html

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.less'],
  //providers: [Repository] //см. также app.module.ts
})
export class PeopleComponent implements OnInit {

  people: Array<Person> = [];
  lowPaidLevel = Repository.lowPaidLevel
  lowPaidCount = 0;

  //Вариант без DI
  // constructor() { 
  //   let repository = new Repository(); //не вполне стильно, нe DI
  //   this.people = repository.people;
  //   this.lowPaidCount = this.people.filter(p => p.salary < this.lowPaidLevel).length;
  // }

  //Вариант c DI (инжекция зависимости через конструктор)
  constructor(repository: Repository) { 
    this.people = repository.people;
    this.lowPaidCount = this.people.filter(p => p.salary < this.lowPaidLevel).length;
  }

  ngOnInit(): void {
  }

}
