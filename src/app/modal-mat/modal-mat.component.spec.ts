import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMatComponent } from './modal-mat.component';

describe('ModalMatComponent', () => {
  let component: ModalMatComponent;
  let fixture: ComponentFixture<ModalMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalMatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
