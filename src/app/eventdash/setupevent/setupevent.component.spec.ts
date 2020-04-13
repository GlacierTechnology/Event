import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupeventComponent } from './setupevent.component';

describe('SetupeventComponent', () => {
  let component: SetupeventComponent;
  let fixture: ComponentFixture<SetupeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
