import { Component, OnInit } from '@angular/core';

//<ng-content></ng-content> - место, куда подставится другая компонента, 
// которая в шаблоне будет находиться внутри тэга <collapsible>.
// См. файл people.component.html

@Component({
  selector: 'collapsible',
  template: `
    <div (click)="toggle()" class="toggle-element">
      <!-- <span *ngIf="isCollapsed">Show</span>
      <span *ngIf="!isCollapsed">Hide</span> -->
      {{isCollapsed ? 'Show' : 'Hide'}}
    </div>

    <div  [ngClass]="{'collapsed': isCollapsed}">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./collapsible.component.less']
})
export class CollapsibleComponent implements OnInit {

  isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
      this.isCollapsed = !this.isCollapsed
  }

}
