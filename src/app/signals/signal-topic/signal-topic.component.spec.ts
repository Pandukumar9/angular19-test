import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalTopicComponent } from './signal-topic.component';

describe('SignalTopicComponent', () => {
  let component: SignalTopicComponent;
  let fixture: ComponentFixture<SignalTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalTopicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
