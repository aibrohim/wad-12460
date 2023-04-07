import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAuthorBtnsComponent } from './edit-author-btns.component';

describe('EditAuthorBtnsComponent', () => {
  let component: EditAuthorBtnsComponent;
  let fixture: ComponentFixture<EditAuthorBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAuthorBtnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAuthorBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
