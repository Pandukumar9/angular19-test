import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseDeleteDialogComponent } from './reuse-delete-dialog.component';

describe('ReuseDeleteDialogComponent', () => {
  let component: ReuseDeleteDialogComponent;
  let fixture: ComponentFixture<ReuseDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseDeleteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
