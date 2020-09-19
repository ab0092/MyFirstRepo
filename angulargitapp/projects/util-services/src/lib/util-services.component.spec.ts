import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilServicesComponent } from './util-services.component';

describe('UtilServicesComponent', () => {
  let component: UtilServicesComponent;
  let fixture: ComponentFixture<UtilServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
