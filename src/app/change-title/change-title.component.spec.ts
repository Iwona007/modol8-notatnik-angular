import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTitleComponent } from './change-title.component';

describe('ChengeTitleComponent', () => {
  let component: ChangeTitleComponent;
  let fixture: ComponentFixture<ChangeTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
