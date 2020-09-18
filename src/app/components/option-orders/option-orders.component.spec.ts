import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionOrdersComponent } from './option-orders.component';

describe('OptionOrdersComponent', () => {
  let component: OptionOrdersComponent;
  let fixture: ComponentFixture<OptionOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
