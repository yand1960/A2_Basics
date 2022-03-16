import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../people/repository';

//Декторатор @Input позволяет передавать свойство person 
// компоненте из другого шаблона (здесь - из people.component.html)

@Component({
  selector: 'app-single-person',
  template: `
  <div>
    <div style="display: inline-block; vertical-align: top;">
      {{person.firstName}} <br />
      {{person.lastName}} <br />
      {{person.salary}} <br />
    </div>
    <div style="display: inline-block;">
      <img src = "assets/images/{{person.photo}}" />
    </div>
  </div>
  `,
  styleUrls: ['./single-person.component.less']
})
export class SinglePersonComponent implements OnInit {

  @Input()
  person: Person = new  Person(0,'','',0,'');

  constructor() { 
    //this.person = new Person(33,"Vasya","Pupkin",77777,'')
  }

  ngOnInit(): void {
  }

}
