import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersListComponent } from './publishers-list.component';

describe('PublishersListComponent', () => {
  let component: PublishersListComponent;
  let fixture: ComponentFixture<PublishersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
