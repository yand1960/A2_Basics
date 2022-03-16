import { Component, OnInit } from '@angular/core';
import { Person, Repository } from './repository';

// 1. Показ множественных данных. См файлы repository.ts и шаблон people.component.v1.html
// 2. Настройка маршрутизации (в стиле SPA). См. app-routing.module.ts и app.component.html
// 3. Переход на другую страницу с параметром (см.компоненту person-delal 
//и файл app-routing.module.ts как определить маршрут с параметром)
// 4. Использование стиля master-detail (см. компоненту single-person и people.component.html)
// 5. Content Projection (см. компоненту collapsible)

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
