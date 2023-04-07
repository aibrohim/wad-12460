import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherEditBtnsComponent } from './publisher-edit-btns.component';

describe('PublisherEditBtnsComponent', () => {
  let component: PublisherEditBtnsComponent;
  let fixture: ComponentFixture<PublisherEditBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherEditBtnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherEditBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
