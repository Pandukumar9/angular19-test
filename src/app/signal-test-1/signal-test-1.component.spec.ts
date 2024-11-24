import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalTest1Component } from './signal-test-1.component';

describe('SignalTest1Component', () => {
  let component: SignalTest1Component;
  let fixture: ComponentFixture<SignalTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalTest1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
