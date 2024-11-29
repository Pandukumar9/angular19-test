import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgselectTestComponent } from './ngselect-test.component';

describe('NgselectTestComponent', () => {
  let component: NgselectTestComponent;
  let fixture: ComponentFixture<NgselectTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgselectTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgselectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
