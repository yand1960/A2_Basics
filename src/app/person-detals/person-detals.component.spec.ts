import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetalsComponent } from './person-detals.component';

describe('PersonDetalsComponent', () => {
  let component: PersonDetalsComponent;
  let fixture: ComponentFixture<PersonDetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonDetalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
