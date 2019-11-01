import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpsComponent } from './amps.component';

describe('AmpsComponent', () => {
  let component: AmpsComponent;
  let fixture: ComponentFixture<AmpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
