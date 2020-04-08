import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllNoticeComponent } from './get-all-notice.component';

describe('GetAllNoticeComponent', () => {
  let component: GetAllNoticeComponent;
  let fixture: ComponentFixture<GetAllNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
