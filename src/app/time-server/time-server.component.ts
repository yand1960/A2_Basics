import { Component, OnInit } from '@angular/core';

// 1.Создать проект: ng new A2_Basics 
// 2.Запустить обслуживание проекта сервером: 
// зайти в папку  A2_Basics и выполнить ng serve
// 3.Создать компоненту: ng generate component time-server 
// 4.Увидеть компоненту в работе: 
// добавить ее на страницу index.html и в Bootstrap файла модуля app.module.ts 
// или добавить ее в файл app.component.html.

// Одна компонента - это 4 файла: 
//декорированный класс (ts), шаблон (html), стиль (css или др.) и спецификация теста
//Шаблон, если он простой, 
// может быть указан не в отдельном файле, а прямо в ts (см.ниже)

// @Component({
//   selector: 'app-time-server',
//   templateUrl: './time-server.component.html',
//   styleUrls: ['./time-server.component.less']
// })
@Component({
  selector: 'app-time-server',
  template: `
    <h2>Time is {{now}}
  `,
  styleUrls: ['./time-server.component.less']
})
export class TimeServerComponent implements OnInit {

  now: Date;
  nowShort: string; //не в духе MVC

  constructor() { 
	  this.now = new Date();
    this.nowShort = this.now.toTimeString();
  }

  ngOnInit(): void {
  }

}
