import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsTestComponent } from './popups-test.component';

describe('PopupsTestComponent', () => {
  let component: PopupsTestComponent;
  let fixture: ComponentFixture<PopupsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupsTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
