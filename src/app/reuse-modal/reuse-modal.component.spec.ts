import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseModalComponent } from './reuse-modal.component';

describe('ReuseModalComponent', () => {
  let component: ReuseModalComponent;
  let fixture: ComponentFixture<ReuseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
