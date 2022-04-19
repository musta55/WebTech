import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInputsComponent } from './show-inputs.component';

describe('ShowInputsComponent', () => {
  let component: ShowInputsComponent;
  let fixture: ComponentFixture<ShowInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
