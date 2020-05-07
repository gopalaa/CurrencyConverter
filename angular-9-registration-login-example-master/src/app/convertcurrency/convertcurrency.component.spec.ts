import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertcurrencyComponent } from './convertcurrency.component';

describe('ConvertcurrencyComponent', () => {
  let component: ConvertcurrencyComponent;
  let fixture: ComponentFixture<ConvertcurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertcurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
