import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneNoticeComponent } from './get-one-notice.component';

describe('GetOneNoticeComponent', () => {
  let component: GetOneNoticeComponent;
  let fixture: ComponentFixture<GetOneNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOneNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
