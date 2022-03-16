import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../people/repository';

@Component({
  selector: 'app-single-person',
  template: `
  <div>
    {{person.firstName}} <br />
    {{person.lastName}} <br />
    {{person.salary}} <br />
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
