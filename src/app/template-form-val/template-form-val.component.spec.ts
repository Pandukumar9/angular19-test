import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormValComponent } from './template-form-val.component';

describe('TemplateFormValComponent', () => {
  let component: TemplateFormValComponent;
  let fixture: ComponentFixture<TemplateFormValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormValComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
