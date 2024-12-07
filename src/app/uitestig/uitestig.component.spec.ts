import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UitestigComponent } from './uitestig.component';
import { ApiService } from '../api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('UitestigComponent', () => {
  let component: UitestigComponent;
  let fixture: ComponentFixture<UitestigComponent>;
  let apiser : ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UitestigComponent],
      providers: [ApiService,HttpClient,HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UitestigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiser = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get result onAdd',() => {
    component.num1 = 5;
    component.num2 = 6;
    component.onAdd();
    expect(component.result).toBe(12);
  })

  it("Should get sum of getSumofTwonum", () => {
    component.num1 = 3;
    component.num2 = 2;
    component.getAddition();
    const addresult = component.getSumofTwonum(component.num1,component.num2)
    expect(addresult).toBe(5);
  })

  it("Should get sum of getSumofTwonum 22", () => {
    const num1 = 3;
    const num2 = 2;
    component.getAddition();
    const addresult = component.getSumofTwonum(num1,num2)
    expect(addresult).toBe(5);
  })


  it("Should get sum of getSumofTwonum 22", () => {
    const num1 = 3;
    const num2 = 2;
    const addresult = component.getSumofTwonum(num1,num2)
    expect(addresult).toBe(7);
  })

  it("Should get sum from service getAdditionfromService", () => {
    component.num1 = 3;
    component.num2 = 5;

    spyOn(apiser,'addTwono').and.callThrough();
    component.getAdditionfromService();

    expect(apiser.addTwono(component.num1,component.num2)).toBe(8);
    expect(component.result).toBe(8)
  })
});

