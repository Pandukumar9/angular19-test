import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalLearnpnComponent } from './signal-learnpn.component';

describe('SignalLearnpnComponent', () => {
  let component: SignalLearnpnComponent;
  let fixture: ComponentFixture<SignalLearnpnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalLearnpnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalLearnpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
