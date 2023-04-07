import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditButtonsComponent } from './edit-buttons.component';

describe('EditButtonsComponent', () => {
  let component: EditButtonsComponent;
  let fixture: ComponentFixture<EditButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
