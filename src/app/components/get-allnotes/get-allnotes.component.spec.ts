import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllnotesComponent } from './get-allnotes.component';

describe('GetAllnotesComponent', () => {
  let component: GetAllnotesComponent;
  let fixture: ComponentFixture<GetAllnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
