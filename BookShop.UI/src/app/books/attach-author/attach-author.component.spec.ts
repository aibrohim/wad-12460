import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachAuthorComponent } from './attach-author.component';

describe('AttachAuthorComponent', () => {
  let component: AttachAuthorComponent;
  let fixture: ComponentFixture<AttachAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttachAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
