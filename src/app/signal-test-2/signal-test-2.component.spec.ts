import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalTest2Component } from './signal-test-2.component';

describe('SignalTest2Component', () => {
  let component: SignalTest2Component;
  let fixture: ComponentFixture<SignalTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalTest2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
