import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playertable } from './playertable';

describe('Playertable', () => {
  let component: Playertable;
  let fixture: ComponentFixture<Playertable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Playertable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Playertable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
