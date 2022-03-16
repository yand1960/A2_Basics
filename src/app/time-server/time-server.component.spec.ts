import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeServerComponent } from './time-server.component';

describe('TimeServerComponent', () => {
  let component: TimeServerComponent;
  let fixture: ComponentFixture<TimeServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
