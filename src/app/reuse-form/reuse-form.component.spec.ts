import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseFormComponent } from './reuse-form.component';

describe('ReuseFormComponent', () => {
  let component: ReuseFormComponent;
  let fixture: ComponentFixture<ReuseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
