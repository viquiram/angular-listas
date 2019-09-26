import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCComponent } from './lista-c.component';

describe('ListaCComponent', () => {
  let component: ListaCComponent;
  let fixture: ComponentFixture<ListaCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
