import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarrasComponent } from './guitarras.component';

describe('GuitarrasComponent', () => {
  let component: GuitarrasComponent;
  let fixture: ComponentFixture<GuitarrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
