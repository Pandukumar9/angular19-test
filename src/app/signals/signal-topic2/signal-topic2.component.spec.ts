import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalTopic2Component } from './signal-topic2.component';

describe('SignalTopic2Component', () => {
  let component: SignalTopic2Component;
  let fixture: ComponentFixture<SignalTopic2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalTopic2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalTopic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
