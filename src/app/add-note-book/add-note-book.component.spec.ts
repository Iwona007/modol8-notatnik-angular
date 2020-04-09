import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoteBookComponent } from './add-note-book.component';

describe('AddNoteBookComponent', () => {
  let component: AddNoteBookComponent;
  let fixture: ComponentFixture<AddNoteBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNoteBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoteBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
