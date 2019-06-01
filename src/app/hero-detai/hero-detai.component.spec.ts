import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetaiComponent } from './hero-detai.component';

describe('HeroDetaiComponent', () => {
  let component: HeroDetaiComponent;
  let fixture: ComponentFixture<HeroDetaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
