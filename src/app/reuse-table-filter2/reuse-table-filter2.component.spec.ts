import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseTableFilter2Component } from './reuse-table-filter2.component';

describe('ReuseTableFilter2Component', () => {
  let component: ReuseTableFilter2Component;
  let fixture: ComponentFixture<ReuseTableFilter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseTableFilter2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseTableFilter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
