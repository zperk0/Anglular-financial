import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJournalComponent } from './add-journal.component';

describe('AddJournalComponent', () => {
  let component: AddJournalComponent;
  let fixture: ComponentFixture<AddJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
