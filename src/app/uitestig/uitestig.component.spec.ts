import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UitestigComponent } from './uitestig.component';

describe('UitestigComponent', () => {
  let component: UitestigComponent;
  let fixture: ComponentFixture<UitestigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UitestigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UitestigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get result onAdd',() => {
    component.num1 = 3;
    component.num2 = 4;
    component.onAdd();
    expect(component.result).toBe(7);
  })
});
