import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseBioComponent } from './release-bio.component';

describe('ReleaseBioComponent', () => {
  let component: ReleaseBioComponent;
  let fixture: ComponentFixture<ReleaseBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
