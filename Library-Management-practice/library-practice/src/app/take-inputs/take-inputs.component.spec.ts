import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeInputsComponent } from './take-inputs.component';

describe('TakeInputsComponent', () => {
  let component: TakeInputsComponent;
  let fixture: ComponentFixture<TakeInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
