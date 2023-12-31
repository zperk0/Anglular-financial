import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyFilterComponent } from './policy-filter.component';

describe('PolicyFilterComponent', () => {
  let component: PolicyFilterComponent;
  let fixture: ComponentFixture<PolicyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
