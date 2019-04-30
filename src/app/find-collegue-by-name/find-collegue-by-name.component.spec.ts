import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCollegueByNameComponent } from './find-collegue-by-name.component';

describe('FindCollegueByNameComponent', () => {
  let component: FindCollegueByNameComponent;
  let fixture: ComponentFixture<FindCollegueByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCollegueByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCollegueByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
