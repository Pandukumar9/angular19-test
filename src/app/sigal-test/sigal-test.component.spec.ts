import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigalTestComponent } from './sigal-test.component';

describe('SigalTestComponent', () => {
  let component: SigalTestComponent;
  let fixture: ComponentFixture<SigalTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigalTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
