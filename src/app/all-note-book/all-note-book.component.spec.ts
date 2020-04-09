import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNoteBookComponent } from './all-note-book.component';

describe('AllNoteBookComponent', () => {
  let component: AllNoteBookComponent;
  let fixture: ComponentFixture<AllNoteBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllNoteBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNoteBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
